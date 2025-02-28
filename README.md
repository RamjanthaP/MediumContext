# Amaceit.se

## Summary

This project is built in Next.js with Storyblok as CMS.

## Table of content

- [Amaceit.se](#amaceitse)
  - [Summary](#summary)
  - [Table of content](#table-of-content)
- [Get started](#get-started)
  - [Setup](#setup)
- [Start developing](#start-developing)
  - [Proxy for Preview in Storyblok](#proxy-for-preview-in-storyblok)
  - [Get types for storyblok](#get-types-for-storyblok)
    - [Trouble shooting](#trouble-shooting)
  - [Run Storybook (Our component library)](#run-storybook-our-component-library)
  - [Conventions](#conventions)
    - [Styling](#styling)
      - [Dark Mode](#dark-mode)
  - [Tests](#tests)
    - [Unit tests](#unit-tests)
      - [Exemple](#exemple)
    - [End to End tests (E2E)](#end-to-end-tests-e2e)
  - [Integrations](#integrations)
    - [Storyblok to Linkedin posting (Currently not working)](#storyblok-to-linkedin-posting-currently-not-working)
- [References](#references)
  - [Stack](#stack)
  - [Script reference](#script-reference)
  - [Folder structure](#folder-structure)

# Get started

## Setup

1. Clone repository and cd into the folder
2. Make a copy of `EXEMPLE.env.local` and name it `.env.local` in the root directory. Get the API key from the link in the comment or ask a college.
3. Run `npm i`
4. Run `npm run dev`
5. Open `http://localhost:3000`

## VsCode extenstions

These extensions are highly recommended when working with this repo:

- esbenp.prettier-vscode
- bradlc.vscode-tailwindcss
- Playwright Test for VSCode

# Start developing

## Proxy for Preview in Storyblok

In order preview things in Storyblok we need a HTTPS connection which we easily can't get with our dev server. Therefor we need a proxy.

1. Run `npm i -g local-ssl-proxy` to globally install the local-ssl-proxy package
2. Start your server by running `npm run dev`
3. Open a new terminal session in the working directory and run `npm run dev:proxy` in order to start the proxy server.
4. Visit `https://localhost:3010` in order verify that the proxy is working and looks the same as `https://localhost:3000`

## Get types for storyblok

In order to get typecomletion and type safety we are using `storyblok-generate-ts` that will translate our CMS data to types. In order to keep the codebase up to date with what we do on Storyblok we need to fetch an updated representation of the CMS data and then translate it to type definitions.

1. Install Storyblok CLI by running `npm i -g storyblok`
2. Login `storyblok login` (Use your credentials)
3. Get all types from our storyblok `npm run sb-types:fetch`
4. Create types for our code `npm run sb-types:generate`

### Troubleshooting

**Fetching error Storyblok**

If there's an error fetching, try to logout of storyblok cli by `storyblok logout` and then login again with `storyblok login` and enter your credentials.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**Npm failed with return code 1**

If this error occurs when deploying check the terminal in the Pipelines inside Devops. There it will show why the error has occured and what is throwing it.

If the error shows a playwright test failing, you can either run the tests locally or use the \* _Playwright Exstenstion_ \* to run the tests inside vscode.
Do this to ensure that the tests succeed before deploying.

If you want to use the terminal to run the tests, use the commands below:

- To run all the tests

```bash
npx playwright test
```

- To run the last failed

```bash
npx playwright test --last-failed
```

## Run Storybook (Our component library)

Our components are made available in our Storybook for review and testing purposes. In order to start storybook.

- Run `npm run storybook` for see all components in our storybook.

## Conventions

- TODO: fill in this part

### Styling

#### Dark Mode

- TODO: fill in this part

## Tests

### Unit tests

Are written in jest/testing-library syntax and is placed in context with the file it's testing.
Use the suffix `filename.test.tsx` instead of `filename.spec.tsx`. This convention makes it easier to separate unit tests from e2e tests.

#### Example

For a function in `utils/text-helper.ts` the test should be `utils/test-helper.test.ts`

### End to End tests (E2E)

Are written in playwright and should be placed in `/test-e2e` with a descriptive naming and test a clear scope of functionality, for exemple just navigation or just a contact form.

## Integrations

### Storyblok to Linkedin posting (Currently not working)

The integration from Storyblok to Linkedin is designed so when a post is published, changed or unpublished, it will create, updated or remove a Linkedin-post.
The post will take the image and an excerpt of the text and publish it to Linkedin with a link to the post on the site.

The mechanics behind it is.

1. A user publish a post
2. A webhook in Storyblok will call amaceit.com/api/storyblokToLinkedInWebhook (located under src/pages/api/storyblokToLinkedInWebhook.tsx) which in turn will.... TODO: Investigate and documentate

# References

## Stack

Things to be familiar oneself with when working with this project.

- Next (Application framework)
- [Storyblok](https://storyblok.com) (CMS, headless, SaaS )
- Storybook (Component library)
- Typescript
- Tailwind (CSS utility framework)
- [Playwright](https://playwright.dev/) for E2E-testing

## Script reference

| Script                   | Description                                                                                                                                                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`                    | Starts the development server using Next.js.                                                                                                                                                                                  |
| `dev:proxy`              | Sets up a local SSL proxy to redirect traffic from port 3010 to port 3000 using specified SSL certificates. This is often used for local development with secure connections.                                                 |
| `build`                  | Builds the Next.js application for production deployment.                                                                                                                                                                     |
| `build:local`            | Builds the application and then copies static assets and public files to a standalone directory. This can be useful for creating a self-contained build for deployment in certain environments.                               |
| `start`                  | Prompts the user to provide a Storyblok API token, sets it as an environment variable, and then starts the server for the standalone build of the Next.js application. Requires a Storyblok API token for proper functioning. |
| `start:debug`            | Starts the Next.js application in debug mode.                                                                                                                                                                                 |
| `test`                   | Runs Jest tests in watch mode, allowing for interactive test development.                                                                                                                                                     |
| `test:ci`                | Runs Jest tests for continuous integration without watch mode.                                                                                                                                                                |
| `test:e2e`               | Runs end-to-end tests using Playwright.                                                                                                                                                                                       |
| `test:e2e:debug`         | Runs end-to-end tests in debug mode using Playwright's user interface.                                                                                                                                                        |
| `lint`                   | Lints the Next.js application code using the configured linting rules.                                                                                                                                                        |
| `format`                 | Checks and formats the code using Prettier, following the rules specified in the project. It respects the `.gitignore` file for file exclusion.                                                                               |
| `sb-types:fetch`         | Fetches Storyblok components from the specified space (in this case, space ID 255438).                                                                                                                                        |
| `sb-types:generate`      | Generates TypeScript definitions for Storyblok components based on a JSON file representing the components.                                                                                                                   |
| `storybook`              | Starts the Storybook development server on port 6006 for interactive component development.                                                                                                                                   |
| `storybook:static:build` | Builds a static version of the Storybook project.                                                                                                                                                                             |
| `storybook:static:start` | Serves the statically built Storybook project on port 6006.                                                                                                                                                                   |

## Folder structure

```sh
├── EXEMPLE.env.local # Exemple of the env file, witch sensitive info removed
├── README.md # The file you currently reading.
├── certificates # Certificates for proxy
│   ├── localhost-key.pem
│   └── localhost.pem
│
├── ci # Used for testing, building and deploying on azure devops.
│   ├── parts # include parts to the different pipelines
│   │   ├── cache.yml
│   │   └── ...
│   │
│   ├── pipeline-deploy-full.yml
│   ├── pipeline-deploy-prod.yml
│   ├── pipeline-deploy-stage.yml
│   ├── pipeline-on-pr.yml
│   └── tests # Tests to run after deploy to verify we're up and running
│       └── ...
│
├── component-types-sb.d.ts     # Generated type from Storyblok
├── components.255438.json      # Representation of the components on Storyblok
├── ecosystem.config.js         # Used for running the app on Azure
├── env.d.ts                    # Provides type completion for process.env.?
├── jest.config.js
├── jest.setup.js
├── next-env.d.ts               # Added by Next. Don't edit, since it will be overwritten
├── next.config.js
├── package-lock.json
├── package.json
├── playwright.config.ts
├── postcss.config.js
├── public                      # Arbitrary assets like images, that should be available from the site
│   └── assets/...
│
├── src
│   ├── api                     # Api clients and helpers for data fetching and posting
│   │   ├── apiClient.tsx       # Generic data fetcher used for blocks and pages
│   │   ├── blocks.tsx          # Retrieve data for certain blocks
│   │   ├── mailclient.tsx      # Used for sending mail
│   │   ├── pages.tsx           # Data fetching for pages
│   │   └── types.d.ts          # Helper type for data fetching
│   │  
│   ├── app
│   │   ├── api
│   │   ├── favicon.ico
│   │   └── globals.css
│   │  
│   ├── components/...            # Our (pure) UI components
│   │  
│   ├── config.tsx                # Some configuration values
│   ├── pages                     # All routes for the app
│   │   ├── [[...path]].tsx       # Generic route for everything that comes from Storyblok
│   │   ├── _app.tsx
│   │   ├── api/...               # TODO: Move this to app/api.
│   │   ├── not-found.tsx
│   │   └── services              # All stuff under the route /services
│   ├── storyblok                 # Bridge between storyblok data and our UI components
│   │   ├── StoryblokProvider.ts  # Where to register new components from Storyblok
│   │   ├── components/...        # Components that map our storyblok data against our UI components
│   │   ├── fallback-component    # A component that is shown if a component isn't regiestered in StoryblokProvider.
│   │   ├── helpers               # Storyblok related helpers
│   │   ├── templates             # The page templates created in Storyblok
│   │   └── utilities.ts          # Helpers for Storyblok
│   ├── types                     # Types
│   │   ├── common.d.ts
│   │   ├── props.d.ts
│   │   └── types.d.ts
│   └── utilities                 # Arbitrary helpers
│       ├── HeadMetadata.tsx
│       ├── dev-utils.tsx
│       ├── dtoMappers.ts
│       ├── helper.tsx
│       ├── linkedinPoster.ts     # Related to posting to Linkedin
│       ├── relatedItems.test.tsx
│       ├── relatedItems.tsx
│       └── storyblokService.ts   # Gets story for Linkedin posting
├── tailwind.config.ts            # Configuration of CSS framework: Colors, sizes etc.
├── test-results
├── tests-e2e                     # End to end tests
│   ├── data-mocks
│   │   └── form-data.ts
│   ├── mail-api.spec.ts
│   ├── menu-navigation.spec.ts
│   └── services.spec.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
```
