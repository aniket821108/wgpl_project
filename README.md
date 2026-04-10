# React Assingment For Websiteble Global Private Limited

A pixel-faithful React implementation of the Elementum design, featuring responsive layout, scroll animations, and hover interactions.

## Tech Stack
- **React 18** (Vite)
- **Pure CSS** (no UI library dependencies)
- **Docker** for containerized deployment

## Features Implemented
-  Navbar with scroll effect & mobile hamburger menu
-  Hero section with team photos & animated decorations
-  "Tomorrow" two-column section with circular image
-  "Progress" two-column section
-  Services list with hover interactions
-  Testimonials with side avatar photos
-  Newsletter subscribe section
-  Four-column footer
-  Fully responsive (mobile / tablet / desktop)
-  Scroll-reveal animations
-  Subtle hover states throughout

## Running with Docker (Recommended)

```bash
# Build and start
docker compose up --build

# Visit
open http://localhost:3000
```

## Running Locally (Dev mode)

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Tomorrow/
│   ├── Progress/
│   ├── Services/
│   ├── Testimonials/
│   ├── Newsletter/
│   └── Footer/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```
