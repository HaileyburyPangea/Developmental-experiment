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

Each study stores its starting age and, for ranges or lists, its ending age as
numeric values and units. Studies are ordered and grouped by their ending date;
ties are ordered by starting date. The upcoming view uses the end of the age
window, so an ongoing range remains visible. A range or list does not create
recurring appointments. Studies are also highlighted under “Starting now” for
the first 14 calendar days after their start; the “Currently relevant” filter
includes both boundary dates of an age window. The highlighted studies also
remain in the main timeline.

Months use calendar arithmetic and clamp to the last day of shorter months.
Fractional months add the rounded fraction of days in the destination month.
Weeks use seven calendar days; hours use fractions of a day. For scheduling,
the original 12-week study ages have been normalised to three calendar months,
which is not exactly 84 days. Other week ages retain seven-day weeks. Date-only birth
dates are anchored at local noon. Prenatal scheduling assumes the entered date
is the due date at 40 weeks, so 24 weeks gestation is 16 weeks before it.

