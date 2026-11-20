# mywebsite

Personal site, built with [Astro](https://astro.build). Pages are static files in `src/pages`, which replace the old Vue Router table.

| URL | Page |
| --- | --- |
| `/` and `/myWebsite` | Splash |
| `/about` | About |
| `/nyc` | NYC things to do (static page in `public/nyc/index.html`, refreshed daily) |
| `/ski-trip` | Swiss ski trip planner (static page in `public/ski-trip/index.html`) |

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

Set **Settings → Pages → Source** to **GitHub Actions**. The deployment workflow builds and publishes `dist/` on pushes to `master` and can also be run manually from the Actions tab.

The workflow uses the base path reported by GitHub Pages. The default project address is `https://xingxu21.github.io/myWebsite/`; the section links are `/myWebsite/nyc/` and `/myWebsite/ski-trip/`. At the root of a custom domain, use `/nyc/` and `/ski-trip/`.
