# HTMX Template

## Motivation
I wanted to build a project using [HTMX](https://htmx.org) which included [Tailwind](https://tailwindcss.com). The cleanest way to do this is with a client-side bundle which means including webpack. I couldn't find any existing templates so I made my own. I'm not a full-time frontend dev so please let me know if there are better ways of doing things.

## Stack
The stack includes a Node.js server running Express and serving EJS templates. There's also a prettier and eslint config (YMMV). I'm using Webpack to build separate client and server bundles.

## Other Languages?
It's easy enough to just utilise the client side components to build the client bundle for other languages/frameworks.

## Getting started

`pnpm install`

`pnpm run build`

`pnpm run dev` also `pnpm run watch` is available
