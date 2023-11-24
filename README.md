# Amaceit.se

## Stack

Things to be familiar oneself with when working with this project.

- Next (Application framework)
- [Storyblok](https://storyblok.com) (CMS, headless, SaaS )
- Storybook (Component library)
- Typescript
- Tailwind (CSS utility framework)

## Setup

### Develop locally

1. Make a copy of `EXEMPLE.env.local` and name it `.env.local` in the root directory. Get the API key from the link in the comment.
2. Run `npm i`
3. Run `npm run dev` and dev server will start running on [http://localhost:3000](http://localhost:3000)

### Develop in order to preview in Storyblok

In order preview things in Storyblok we need a HTTPS connection which we easily can't get with our dev server. Therefor we need a proxy.

1. Setup a local certificate for localhost by running `brew install mkcert` (on mac).
2. `cd` to your project folder and run `mkcert -install`
3. Run `mkcert localhost`. A `localhost.pem` and a `localhost-key.pem` should appear in your directory. (These are ignored by git)
4. Run `npm i -g local-ssl-proxy`.
5. Open a new terminal session in the working directory and run `npm dev:proxy` in order to start the proxy server.

### Run Storybook

Our components are made available in our Storybook for review and testing purposes. In order to start storybook.

- Run `npm run storybook` for storybook.

## Get types for storyblock

In order to get typecomletion and type safety we are using

1. Install Storyblok CLI by running `npm i -g storyblok`
2. Login `storyblok login` (Use your credentials)
3. Get all types from our storyblok `npm run sb-types:fetch`
4. Create types for our code `npm run sb-types:generate`

### Trouble shooting

If there's an error fetching, try to logout of storyblok cli by `storyblok logout` and then login again with `storyblok login` and enter your credentials.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Folder structure

- TODO: fill in this part

## Conventions

- TODO: fill in this part

## Styling

### Dark Mode

- TODO: fill in this part

---

## Good to know:

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
