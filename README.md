# [DeploymentDelete] ♻️

Deletes Cloudflare deployments older than 7 days. \
https://developers.cloudflare.com/api/operations/pages-deployment-delete-deployment

## Installation

```sh
npm install -g deploymentdelete
```

## CLI Usage

```sh
DeploymentDelete -e example@account.com -i accountId -k accountKey
```

> **Note**
>
> This will not delete your last running deployment.

## Options

```sh
-V, --version output the version number
-e, --Email Account E-mail. < Email > Cloudflare
-i, --ID Account ID. < ID > Cloudflare
-k, --Key API key. < Key > Cloudflare
-h, --help display help for command
```

## Worker

You can also publish it as a worker:

```sh
wrangler publish
```

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/NikolaRHristov/DeploymentDelete)

## Script

**`Source/Index.ts`**

```ts
import Delete from "deploymentdelete";

await Delete(Email, ID, Key);
```

**`.env`**

```env
Email="example@account.com"
ID="accountId"
Key="accountKey"
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this utility.

[DeploymentDelete]: https://npmjs.org/deploymentdelete
