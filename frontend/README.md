# Telemedica Website

![Logo](./public/images/logo.svg)

This is the primary public facing website for Telemedica. It is build as a decoupled front end.

**Frontend Frameworks / Libraries:**

- [NextJS](https://nextjs.org/docs) framework for SSG and SSR
- [Material UI](https://mui.com/material-ui/getting-started) as the component library

**CMSs:**

- [Wordpress](https://admin.telemedicallc.com) for articles and using [WPGraphQL](https://www.wpgraphql.com/docs/introduction) to query data
- [Sanity](https://www.sanity.io/docs/groq) for directory data

## Getting Started

- Install dependencies `yarn install`
- Use required Node version `nvm use`
- Create copy of `.env.example` and rename to `.env.local`
- Add enviornemt variables to new file (see below).
- Run `yarn dev`

## Environment Variables

The quickest and easiest way to do this is to copy all values directly from Netlify utilizing their [CLI](https://docs.netlify.com/cli/get-started/). You'll need to install this globally on your local machine `npm install netlify-cli -g` and then login `netlify login`.

- Run `netlify link`
- Run `netlify env:list --plain`
- Copy output to `.env.local` file
