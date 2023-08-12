# [deploymentdelete] 🚮

This package deletes deployments older than 7 days for Cloudflare Pages.

## Installation

```sh
npm install -g deploymentdelete
```

## CLI Usage

```sh
DeploymentDelete -e example@account.com -i accountId -k accountKey
```

DeploymentDelete will now delete deployments associated with all the projects in
the account using the Cloudflare API older than 7 days.

> **Note**
>
> This will not delete your last running deployment.

## Options

```sh
  -V, --version        output the version number
  -e, --Email <Email>  Cloudflare Account Email.
  -i, --ID <ID>        Cloudflare Account ID.
  -k, --Key <Key>      Cloudflare API key.
  -h, --help           display help for command
```

## Worker

You can also publish it as a worker:

```sh
wrangler publish
```

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/NikolaRHristov/DeleteDeployment)

## Programmatically

**Source/Index.ts**

```ts
import Delete from "deploymentdelete/Target/Library/Delete.js";

await Delete(Env.Email, Env.ID, Env.Key);
```

**.env**

```
Email=""
ID=""
Key=""
```

[deploymentdelete]: https://npmjs.org/deploymentdelete
