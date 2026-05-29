## 0.1.0

### Add

- Implement `Project.ts` - lists all Pages projects for an account
- Implement `Deployment.ts` - lists all deployment IDs with pagination
- Implement `Delete.ts` - deletes deployments using Bearer token or Email + Key
  auth, with `?force=true` and optional single-project filter
- Add `Token` and `Project` fields to environment schema and CLI (`-t`, `-p`)
- CLI loads `.env` via dotenv and uses it as default for all flags - `Delete`
  with no arguments runs from `.env`
- Add `Configuration/ESBuild.ts` aligned with the PlayForm build pipeline

### Fix

- `Delete.sh` - was sending GET instead of DELETE, had no pagination, no
  `?force=true`, and no Bearer token support
- `Interface/Environment.ts` - invalid TypeScript syntax
- `tsconfig.json` - override inherited `rootDir` from `@playform/build/tsconfig`
- `wrangler.toml` - replace deprecated `node_compat = true` with
  `compatibility_flags = ["nodejs_compat"]`
- Remove committed `.d.ts` files from `Source/` - these are build artifacts
- Add `commander` to `dependencies` - was missing, causing unpredictable version resolution at runtime
- Fix `Class/Delete.ts` - use `.parse(process.argv, { from: "node" })` to prevent commander treating the script path as a positional argument

## 0.0.1

- Initial version
