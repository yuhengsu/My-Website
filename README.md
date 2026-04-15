# Yu Heng Su — Personal Portfolio

**Live site:** https://yuhengsu.com

---

## Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Styling | Tailwind CSS v3 |
| Bundler | Vite 5 |
| Routing | React Router v6 (HashRouter) |
| Deployment | GitHub Pages via GitHub Actions |
| Node version | 20 |

**Why HashRouter:** GitHub Pages serves static files with no server-side routing. If BrowserRouter were used, navigating directly to a URL like `yuhengsu.com/projects/cssc` would return a 404. HashRouter uses `#` in the URL (e.g. `yuhengsu.com/#/projects/cssc`) which resolves entirely on the client — no server involvement needed.

---

## Project Structure

```
My-Website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions: build + deploy to GitHub Pages
├── public/                     # Static assets — copied as-is into dist/ at build time
│   ├── pictures/               # All project and profile images
│   ├── Benson Su - CS.pdf      # Resume
│   └── CNAME                   # Custom domain (yuhengsu.com)
├── src/
│   ├── components/             # Shared UI components used across all pages
│   │   ├── Layout.jsx          # Wrapper: canvas width + padding, renders Nav + Footer
│   │   ├── Nav.jsx             # Top nav bar: name (left), links + theme toggle (right)
│   │   ├── Footer.jsx          # Bottom footer: email, LinkedIn, GitHub icon links
│   │   └── ThemeToggle.jsx     # Sun/moon button — toggles dark class on <html>, persists to localStorage
│   ├── data/
│   │   ├── projects.js         # Grid data for the Home page (name, image, slug/href per project)
│   │   └── projectDetails.js   # Full content for each project page (title, tech, description, images, links)
│   ├── pages/
│   │   ├── Home.jsx            # Projects grid page — renders ProjectCard for each entry in projects.js
│   │   ├── About.jsx           # About Me page — two-column layout (bio text + photo)
│   │   └── ProjectDetail.jsx   # Dynamic project page — reads slug from URL, looks up projectDetails.js
│   ├── App.jsx                 # Route definitions (HashRouter + Routes)
│   ├── main.jsx                # React entry point — mounts <App /> into #root
│   └── index.css               # Tailwind directives + base html/dark mode background colors
├── index.html                  # Vite HTML entry point — loads Inter font, mounts #root div
├── package.json                # Dependencies + "type": "module" (required to suppress Vite CJS warning)
├── vite.config.js              # Vite config — React plugin, base: '/'
├── tailwind.config.js          # Tailwind config — darkMode: 'class', Inter font, content paths
└── postcss.config.js           # PostCSS config — wires Tailwind + Autoprefixer into Vite's CSS pipeline
```

---

## Routing

All routes are defined in `src/App.jsx` using `HashRouter`:

| Hash URL | Component | Description |
|---|---|---|
| `/#/` | `Home.jsx` | Projects grid |
| `/#/about` | `About.jsx` | About Me page |
| `/#/projects/:slug` | `ProjectDetail.jsx` | Individual project page |

**Project slugs** (`:slug` values that map to keys in `projectDetails.js`):

| Slug | Project |
|---|---|
| `cssc` | University of Toronto CSSC |
| `bunny-game` | Down The Bunny Goes |
| `discord-bots` | Discord Bots |
| `upgrade` | Up-Grade |
| `yorku-badminton` | YorkU Badminton Club |
| `colour-me-calm` | Colour Me Calm |
| `blud` | Blud |
| `solitaire` | Solitaire 2.0 |

---

## Key Components

### `Layout.jsx`
Wraps every page. Provides the max-width canvas (`max-w-5xl`), horizontal padding, and renders `<Nav />` at the top and `<Footer />` at the bottom. All pages return `<Layout>...</Layout>`.

### `Nav.jsx`
Sticky top nav bar. Uses React Router `<Link>` for internal navigation (Projects, About Me) and a plain `<a>` for the Resume PDF (external file). Imports and renders `<ThemeToggle />` at the far right.

### `ThemeToggle.jsx`
Self-contained dark mode toggle. On mount, reads `localStorage` for a saved preference, falling back to the OS `prefers-color-scheme` media query. On toggle, adds/removes the `dark` class on `document.documentElement` and saves to `localStorage`. Shows a moon icon in light mode, sun icon in dark mode (inline SVGs, no icon library).

### `Home.jsx`
Renders a 4-column CSS grid of `ProjectCard` components (responsive: 3 cols → 2 cols on tablet/mobile). Each card is a square (`aspect-square`) image with the project name below. Internal projects use React Router `<Link>`, external projects use `<a target="_blank">`.

### `ProjectDetail.jsx`
Single component that handles all project detail pages. Reads the `:slug` param via `useParams()`, looks it up in `projectDetails.js`, and renders:
- **Back link** — `← Projects` navigates to `/#/`
- **Split header** — title, tech pill tags, description, and action buttons on the left; hero image (first in the images array) on the right
- **Gallery** — remaining images in a 2-column `aspect-video` grid below a divider

---

## Data Layer

### `src/data/projects.js`
Array used by `Home.jsx` to render the project grid. Each entry:
```js
{
  name: 'Project Name',       // displayed under the card image
  img: '/pictures/...',       // image path (served from public/)
  alt: 'description',         // img alt text
  slug: 'project-slug',       // used to build the /#/projects/:slug route
  // OR for external projects:
  external: true,
  href: 'https://...',
}
```

### `src/data/projectDetails.js`
Object keyed by slug, used by `ProjectDetail.jsx`. Each entry:
```js
{
  title: 'Full Project Title',
  tech: 'React, Node, CSS',   // comma-separated — split into pill tags on render
  description: '...',
  images: [
    { src: '/pictures/...', alt: '...' },   // first image = hero
    // remaining images = gallery grid
  ],
  links: [
    { href: 'https://github.com/...', label: 'GitHub Repository' },  // renders as button
    { label: 'Available upon request' },                              // renders as plain text
  ],
}
```

---

## Design System

- **Font:** Inter (loaded from Google Fonts in `index.html`)
- **Color palette:** pure black/white only — no accent colors
- **Dark mode:** toggled via `dark` class on `<html>`, driven by `ThemeToggle.jsx`
- **Borders:** `gray-100` (light) / `gray-800` (dark)
- **Body text:** `gray-500` (light) / `gray-400` (dark)
- **Hover interactions:** borders darken to black (light) / lighten to white (dark)
- **Transitions:** `duration-200 ease` on all interactive elements

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` which:
1. Checks out the repo
2. Installs dependencies (`npm ci`)
3. Runs `npm run build` — Vite outputs to `dist/`
4. Uploads `dist/` as a GitHub Pages artifact
5. Deploys via `actions/deploy-pages@v4`

**Required GitHub repo setting:** Settings → Pages → Source must be set to **GitHub Actions**.

The `CNAME` file in `public/` is copied to `dist/` at build time, which tells GitHub Pages to serve the site at `yuhengsu.com`.

---

## Local Development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the dist/ build locally
```
