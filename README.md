## This boilerplate includes (PurgeCSS, PostCSS, Tailwind, Vite Inspect, autoprefixer, react-router)

---

1. Rename module name in package.json
2. install dependencies (OR Update Vite)
   > yarn
3. Update all modules
   > yarn add -D tailwindcss postcss autoprefixer purgecss rollup-plugin-purgecss sass vite-plugin-inspect
4. run development
   > yarn dev
5. generate tailwindcss config
   > npx tailwindcss init -p

---

### Create storybook

1. change directory inside created vite project
   > cd .......(folder)
   > npx sb@next init --builder storybook-builder-vite
2. Start storybook
   > yarn storybook

---

> If CSS is not receiving then remove PurgeCSS from vite.config.ts
