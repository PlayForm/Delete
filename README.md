# [deploymentdelete] 🚮

This package deletes deployments older than 7 days for Cloudflare Pages.

## Installation

```sh
npm install -g deletedeployment
```

## Usage

```sh
deletedeployment -e example@account.com -i accountId -k accountKey
```

This deletes all deployments associated with all the projects in the account
using the Cloudflare API.

You can also deploy it as a worker:

```sh
wrangler publish
```

[deploymentdelete]: https://npmjs.org/deploymentdelete
