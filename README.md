# ♻️ [Delete] —

Delete stale Cloudflare Pages deployment. \
https://developers.cloudflare.com/api/operations/pages-deployment-delete-deployment

## Installation

```sh
npm install -g @playform/delete
```

## CLI Usage

```sh
Delete -e example@account.com -i accountId -k accountKey
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
wrangler deploy
```

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/PlayForm/Delete)

## Script

**`Source/Main.ts`**

```ts
await(await import("@playform/delete"))(Email, ID, Key);
```

**`.env`**

```sh
Email="example@account.com"
ID="accountId"
Key="accountKey"
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this utility.

[Delete]: HTTPS://NPMJS.Org/@playform/delete
