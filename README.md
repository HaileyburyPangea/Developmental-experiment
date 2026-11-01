# Developmental Calendar

A React and Vite calendar of developmental studies.

## Run locally

Use Node.js 24 and pnpm 10.30.0 (the packageManager field pins pnpm).

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Run `pnpm test` for scheduling regression tests and `pnpm build` for TypeScript
checking and the production build. `pnpm preview` serves the build locally.

## GitHub Pages

In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
The workflow in `.github/workflows/pages.yml` tests and builds pull requests,
then publishes only `dist` when changes reach `main`. If needed, run the
workflow manually after selecting the Pages source.

The Vite base path is `/Developmental-experiment/`, matching this repository.
Update it if the repository name changes or the site moves to a custom domain.

## Scheduling rules

Each study stores its starting age as a numeric value and unit, separately from
the displayed age range. A range or list currently gets one target at its first
age; it does not create recurring appointments.

Months use calendar arithmetic and clamp to the last day of shorter months.
Fractional months add the rounded fraction of days in the destination month.
Weeks use seven calendar days; hours use fractions of a day. Date-only birth
dates are anchored at local noon. Prenatal scheduling assumes the entered date
is the due date at 40 weeks, so 24 weeks gestation is 16 weeks before it.
