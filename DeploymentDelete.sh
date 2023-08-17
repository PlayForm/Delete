#!/bin/bash

# shellcheck source=/dev/null
source .env

# Fill entries
mapfile -t Projects < <(curl -s --header "content-type: application/json;charset=UTF-8" --header "X-Auth-Email: ${Email:?}" --header "X-Auth-Key: ${Key:?}" "https://api.cloudflare.com/client/v4/accounts/${ID:?}/pages/projects" | jq -r '.result[].name')

# Clean entries
for i in "${!Projects[@]}"; do
	Projects[i]=$(echo "${Projects[i]}" | sed ':a;N;$!ba;s/\n//g')
done

# Fill entries
for Project in "${Projects[@]}"; do
	readarray -t Deployments < <(curl -s --header "content-type: application/json;charset=UTF-8" --header "X-Auth-Email: ${Email}" --header "X-Auth-Key: ${Key}" "https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${Project}/deployments" | jq -r .result[].id)

	# Clean entries
	for i in "${!Deployments[@]}"; do
		Deployments[i]=$(echo "${Deployments[i]}" | sed ':a;N;$!ba;s/\n//g')
	done

	# Delete deployments
	for Deployment in "${Deployments[@]}"; do
		echo -e "$Project"
		echo -e "$Deployment"

		curl -s --header "content-type: application/json;charset=UTF-8" --header "X-Auth-Email: ${Email}" --header "X-Auth-Key: ${Key}" "https://api.cloudflare.com/client/v4/accounts/${ID}/pages/projects/${Project}/deployments/${Deployment}" | jq -r .success
	done
done
