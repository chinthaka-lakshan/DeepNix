# DeepNix Website

A modern, responsive website for DeepNix built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Single Page Layout**: Smooth navigation between sections.
- **Sections**:
  - **Home**: Hero section with background animation.
  - **About**: Information about the company/team.
  - **Services**: Services offered by DeepNix.
  - **Portfolio**: Showcase of projects.
  - **Team**: Introduction to team members.
  - **Contact**: Contact form and information (integrated with EmailJS).
- **Responsive Design**: Fully responsive layout using Tailwind CSS.
- **Animation**: Background animations and potential scroll effects.

## 🛠️ Technologies Used

- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework.
- **[Lucide React](https://lucide.dev/)**: Icon library.
- **[React Router](https://reactrouter.com/)**: Declarative routing for React.
- **[EmailJS](https://www.emailjs.com/)**: Send email directly from JavaScript (used in Contact form).

## ⚙️ Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

## 📦 Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd deepnix-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Usage

### Development Server
Start the development server with HMR (Hot Module Replacement):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
Build the application for production:
```bash
npm run build
```
The output will be in the `dist` folder.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the built app.
- `npm run deploy`: Deploys the application to GitHub Pages (uses `gh-pages`).

## 🚀 Deployment

This project is configured for deployment to GitHub Pages.

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```
   This script runs `npm run build` internally before deploying to the `gh-pages` branch.

## 📂 Project Structure

```
deepnix-website/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, etc.)
│   ├── components/      # React components (Home, About, Contact, etc.)
│   ├── App.tsx          # Main Application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles (Tailwind imports)
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 📄 License

This project is private and proprietary.
