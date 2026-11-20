# mywebsite

Personal site, built with [Astro](https://astro.build). Pages are static files in `src/pages`, which replace the old Vue Router table.

| URL | Page |
| --- | --- |
| `/` and `/myWebsite` | Splash |
| `/second` | Second |
| `/about` | About |
| `/resume` | Resume |
| `/nyc` | NYC things to do (static page in `public/nyc/index.html`, refreshed daily) |

## Project setup

Requires Node.js 22.22.0 or newer. Astro is pinned to 7.4.1 because 7.4.2 and later refuse Node 22.22.2.

```
npm install
```

### Start the dev server

```
npm run dev
```

`npm run serve` still starts the dev server.

### Production build

```
npm run build
```

Output is written to `dist/`. Preview it with `npm run preview`.

### GitHub Pages

```
npm run gh-pages-deploy
```

The old Vue CLI app used `publicPath: './'` so built assets were relative. This Astro app uses root-relative URLs (`/`). For a project site at `https://<user>.github.io/myWebsite/`, set `base: '/myWebsite'` in `astro.config.mjs` before deploying.
