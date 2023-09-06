# HTMX Template

## Motivation
I wanted to build a project using [HTMX](https://htmx.org) which included [Tailwind](https://tailwindcss.com). The cleanest way to do this is with a client-side bundle which means including webpack. I couldn't find any existing templates so I made my own. I'm not a full-time frontend dev so please let me know if there are better ways of doing things.

## Stack
The stack includes a Node.js server running Express and serving EJS templates. There's also a prettier and eslint config (YMMV).

## Getting started

`pnpm install`

`pnpm run build`

`pnpm run dev`
