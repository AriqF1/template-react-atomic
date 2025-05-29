# React Atomic Starter (JavaScript)

A React starter template based on **Atomic Design** principles with:

- React (JavaScript)
- Vite as the build tool
- Tailwind CSS for styling
- Folder structure following Atomic Design (atoms, molecules, organisms, templates, pages)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/AriqF1/template-react-atomic/actions)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/badge/npm-v7.20.0-red)](https://www.npmjs.com/package/npm)

## Features

- Well-organized component structure following Atomic Design
- Tailwind CSS setup with PostCSS and Autoprefixer
- Fast development server and build with Vite
- Basic example components to get started quickly

## Requirements

- Node.js (v16+ recommended)
- npm or yarn

## Getting Started

1. Clone The Repo

   ```bash
   git clone https://github.com/AriqF1/template-react-atomic.git
   cd react-atomic-starter-js
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Run Development Server

   ```bash
   npm run dev
   ```

## Folder Structure

```
src/
├── assets/ # Static files like images, icons
├── components/ # UI components (atoms, molecules, organisms)
│ ├── atoms/
│ ├── molecules/
│ └── organisms/
├── pages/ # Application pages
├── styles/ # Global styles / utilities (Tailwind config in root)
├── App.jsx
└── main.jsx
```

## Script Command

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm install`     | Install dependencies     |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

## Related

- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
