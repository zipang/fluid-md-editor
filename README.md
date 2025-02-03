# Fluid MD Editor

## 📋 Features (roadmap)

- [x] Build with [Astro](https://docs.astro.build/)
- [x] Style with [Pico CSS](https://picocss.com/)
- [x] Basic wrapper for the EasyMDE Markdown editor
- [ ] Toggle between the editor and Markdown preview
- [ ] Render GFM-style Markdown
- [ ] Render LaTeX expressions with Katex
- [ ] Embed images
- [ ] Save as PDF
- [ ] Save as ePub

## 💻 Tech Stack

- **Main Framework** - [Astro](https://astro.build/)
- **Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
- **Component Framework** - [Astro](https://astro.build/) & [SolidJS](https://www.solidjs.com/)  
- **Styling** - [Pico CSS](https://picocss.com/)  
- **Code Formatting** - [Prettier](https://prettier.io/)  
- **Deployment** - [Netlify](https://netlify.com/)  

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── editor/
│   │   ├── *.astro
│   │   └── *.jsx
│   ├── icons/
│   │   └── *.svg
│   ├── layouts/
│   │   └── *Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   └── env.d.ts
├── astro.config.ts
├── tsconfig.json
└── package.json
```

> Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
>
> There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.
>
> Any static assets, like images, can be placed in the `public/` directory, or can be placed in the `src/assets` directory, if you prefer.
>
> We recommend that local images are kept in `src/` when possible so that Astro can transform, optimize and bundle them. Files in the `/public` directory are always served or copied into the build folder as-is, with no processing.
>
> Your local images stored in `src/assets` can be used by all files in your project: .astro, .md, .mdx, .mdoc, and other UI frameworks. Images can be stored in any folder, including alongside your content.
>
> Store your images in the `public/` folder if you want to avoid any processing or to have a direct public link to them.
>
> -- <cite>Astro Docs</cite>

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------: | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |
