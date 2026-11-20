import { defineConfig } from 'astro/config';

// Replaces Vue CLI (`vue.config.js` publicPath + vue-router history mode).
// Routes live in src/pages. Asset URLs stay root-relative, same as local `npm run serve`.
export default defineConfig({
  trailingSlash: 'ignore',
});
