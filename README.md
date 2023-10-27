# Amaceit.se

## Stack

- Next
- Storyblok

## Get types for storyblock

1. Install Storyblok CLI (unless you already have it) `npm i -g storyblok`
2. Login `storyblok login` (Use your credentials)
3. Get all types from our storyblok `yarn fetch-sb-types`
4. Create types for our code `yarn generate-sb-types`

### Troubleshooting

If there's an error fetching, try to logout of storyblok cli by `storyblok logout` and then login again with `storyblok login` and enter your credentials.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

1. Make a copy of `EXEMPLE.env.local` and name it `.env.local` in the root directory. Get the API key from the link in the comment.
2. Run `yarn`
3. Run `yarn dev` and dev server will start running on [http://localhost:3000](http://localhost:3000)
4. Open a new terminal session and run `yarn dev:proxy` in order to start the proxy server. (Install `local-ssl-proxy` globally if you don't have it already, by running `yarn add -g local-ssl-proxy`). It will now be running on [http://localhost:3010](http://localhost:3010). This is needed to preview changes from Storyblok.

## Good to know:

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
