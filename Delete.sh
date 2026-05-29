#!/usr/bin/env bash
set -euo pipefail

# shellcheck source=/dev/null
[[ -f .env ]] && source .env

# cf_curl <METHOD> <URL>
# Prefers API Token (Bearer) auth; falls back to Email + Global API Key.
cf_curl() {
	local Method="$1"
	local URL="$2"

	if [[ -n "${Token:-}" ]]; then
		curl -s -X "$Method" \
			-H "Content-Type: application/json;charset=UTF-8" \
			-H "Authorization: Bearer ${Token}" \
			"$URL"
	else
		curl -s -X "$Method" \
			-H "Content-Type: application/json;charset=UTF-8" \
			-H "X-Auth-Email: ${Email:?}" \
			-H "X-Auth-Key: ${Key:?}" \
			"$URL"
	fi
}

# Collect projects to process.
# Uses $Project env var or first positional argument if set; otherwise lists all.
Projects=()

if [[ -n "${Project:-${1:-}}" ]]; then
	Projects+=("${Project:-${1:-}}")
else
	while IFS= read -r Name; do
		[[ -n "$Name" ]] && Projects+=("$Name")
	done < <(
		cf_curl GET \
			"https://api.cloudflare.com/client/v4/accounts/${ID:?}/pages/projects" \
			| jq -r '.result[].name'
	)
fi

for ProjectName in "${Projects[@]}"; do
	echo "→ Project: $ProjectName"

	Page=1

	while true; do
		Response=$(cf_curl GET \
			"https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${ProjectName}/deployments?per_page=25&page=${Page}")

		TotalCount=$(echo "$Response" | jq -r '.result_info.total_count // 0')
		PerPage=$(echo "$Response"    | jq -r '.result_info.per_page // 25')
		CountOnPage=$(echo "$Response" | jq -r '.result | length')

		while IFS= read -r DeploymentID; do
			[[ -z "$DeploymentID" ]] && continue
			echo -n "  Deleting ${DeploymentID}... "

			Result=$(cf_curl DELETE \
				"https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${ProjectName}/deployments/${DeploymentID}?force=true")

			if [[ "$(echo "$Result" | jq -r '.success')" == "true" ]]; then
				echo "✓"
			else
				Error=$(echo "$Result" | jq -r '.errors[0].message // "unknown error"')
				echo "✗ ${Error}"
			fi
		done < <(echo "$Response" | jq -r '.result[].id')

		# Stop when on the last page
		[[ "$CountOnPage" -lt "$PerPage" ]] && break
		[[ $(( Page * PerPage )) -ge "$TotalCount" ]] && break

		(( Page++ ))
	done
done
