# [deploymentdelete] 🚮

This package deletes deployments older than 7 days for Cloudflare Pages.

## Installation

```sh
npm install -g deploymentdelete
```

## Usage

```sh
DeploymentDelete -e example@account.com -i accountId -k accountKey
```

> **Note**
>
> This will not delete your last running deployment.

This deletes all deployments associated with all the projects in the account
using the Cloudflare API.

You can also publish it as a worker:

```sh
wrangler publish
```

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/NikolaRHristov/DeleteDeployment)

[deploymentdelete]: https://npmjs.org/deploymentdelete
