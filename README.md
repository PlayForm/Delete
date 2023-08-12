# [deploymentdelete] 🚮

This utility deletes deployments older than 7 days for Cloudflare Pages.

## Installation

```sh
npm install -g deploymentdelete
```

## CLI Usage

```sh
DeploymentDelete -e example@account.com -i accountId -k accountKey
```

DeploymentDelete will now delete deployments associated with all the projects in
the account using the Cloudflare API older than 7 days. You might need to re-run
this several times as it only deletes 40 deployments at a time.

> **Note**
>
> This will not delete your last running deployment.

## Options

```sh
  -V, --version        output the version number
  -e, --Email <Email>  Cloudflare Account E-mail.
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

See running it on a schedule -
https://developers.cloudflare.com/workers/configuration/cron-triggers/

## Programmatically

**`Source/Index.ts`**

```ts
import Delete from "deploymentdelete";

await Delete(Email, ID, Key);
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this utility.

[deploymentdelete]: https://npmjs.org/deploymentdelete
