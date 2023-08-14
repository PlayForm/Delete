# [deployment-delete] ♻️

This utility deletes all deployments older than 7 days in your Cloudflare Pages
account.

## Installation

```sh
npm install -g deployment-delete
```

**`.env`**

```ts
Email = "example@account.com";
ID = "accountId";
Key = "accountKey";
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

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/NikolaRHristov/DeploymentDelete)

## Script

**`Source/Index.ts`**

```ts
import Delete from "deployment-delete";

await Delete(Email, ID, Key);
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this utility.

[deployment-delete]: https://npmjs.org/deployment-delete
