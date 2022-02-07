# Contributor Guide

**Note**: This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Before You Begin

You'll need a few things installed locally before you can start working with this repo.

1. [Docker](https://www.docker.com/get-started)
2. [Supabase CLI](https://github.com/supabase/cli)

## Getting Started

1. Fork this repository
2. Create a new `feature/*` branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Install dependencies:

   ```sh
   npm install
   ```

   **Note**: This will initialize [`husky`](https://typicode.github.io/husky/#/), your `.env.local`,
   and the `supabase` CLI.

4. Run the development server:
   ```sh
   npm run dev
   ```
5. Make changes and commit them

   **Note**: This project leverages [Commitizen](https://github.com/commitizen/cz-cli) to assist
   with following our [`commitlint`](https://github.com/conventional-changelog/commitlint) rules and
   [`lint-staged`](https://github.com/okonet/lint-staged) process. You can run the commitizen CLI to
   help you get used to the desired format:

   ```sh
   npm run commit
   ```

   If a commit fails, after updating the necessary changes and staging them, you can try again:

   ```sh
   npm run commit:retry
   ```

6. Push your changes to your fork
7. Create a Pull Request against `main`

## Working Locally

After starting the dev server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Releases

Work w/ Me is automatically deployed via GitHub Actions to Vercel and
[Release Notes](https://github.com/InterwebAlchemy/work-with-me/releases) are generated
automatically from Conventional Commits.

### Preview Deployments

Pull Requests are currently deployed to Vercel as Previews, but properly redirecting from GitHub's
authentication flow doesn't work in Preview Environments at the moment.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!
