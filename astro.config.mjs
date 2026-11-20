import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';

// Replaces Vue CLI (`vue.config.js` publicPath + vue-router history mode).
// Routes live in src/pages. Asset URLs stay root-relative, same as local `npm run serve`.

// Vite's public-file middleware only serves an exact path. `public/nyc/index.html`
// answers `/nyc/index.html` and nothing else, so `/nyc` and `/nyc/` 404 in dev.
// Rewrite those directory URLs onto the index file without a redirect, so the
// address bar stays `/nyc` or `/ski-trip`.
function rewriteDirectoryIndex(rootDir, base) {
  const root = path.resolve(rootDir);
  return function rewriteDirectoryIndexMiddleware(req, _res, next) {
    if (!req.url || (req.method !== 'GET' && req.method !== 'HEAD')) return next();
    const queryAt = req.url.indexOf('?');
    const rawPath = queryAt === -1 ? req.url : req.url.slice(0, queryAt);
    const search = queryAt === -1 ? '' : req.url.slice(queryAt);
    let pathname = rawPath;
    try {
      pathname = decodeURIComponent(rawPath);
    } catch {
      return next();
    }
    if (pathname.endsWith('.html') || pathname.includes('\0') || pathname.includes('..')) return next();
    if (!pathname.startsWith(base)) return next();
    const rel = pathname.slice(base.length).replace(/^\/+|\/+$/g, '');
    if (!rel || path.extname(rel)) return next();
    const indexPath = path.resolve(root, rel, 'index.html');
    if (!indexPath.startsWith(root + path.sep)) return next();
    if (fs.existsSync(indexPath)) req.url = `${base}${rel}/index.html${search}`;
    next();
  };
}

function cleanIndexUrls() {
  return {
    name: 'clean-index-urls',
    configureServer(server) {
      server.middlewares.use(rewriteDirectoryIndex(server.config.publicDir, server.config.base));
    },
  };
}

export default defineConfig({
  trailingSlash: 'ignore',
  vite: {
    plugins: [cleanIndexUrls()],
  },
});
