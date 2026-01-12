# DeepNix - Innovation Showcase

DeepNix is a premium, high-performance website designed with a minimalist dark-themed glassmorphism aesthetic. Built using React, TypeScript, and Tailwind CSS, it features advanced animations and a seamless user experience across all devices.

![Main View](https://grainy-gradients.vercel.app/noise.svg)

## ✨ Core Features

- **Standardized Glassmorphism Design**: High-end UI with semi-transparent backgrounds, blur effects, and subtle gradients.
- **Micro-Animations**: Leverages Framer Motion for smooth, high-fidelity entry and scroll-triggered animations.
- **Full Responsiveness**: Optimized for Desktop, Tablet, and Mobile views with custom grid layouts and font sizing.
- **Component-Driven Architecture**:
  - **Dynamic Hero Section**: High-impact introduction with an animated logo.
  - **Interactive Showcase**: Portfolio section with 3D tilt-style effects.
  - **Themed Business Solutions**: About, Services, Team, and detailed Contact sections.
- **Standalone Legal Pages**: Dedicated routes for Privacy Policy and Terms of Service with automatic scroll-to-top.
- **Integrated Communication**:
  - **Smart Contact Form**: Frontend-only email submission powered by EmailJS.
  - **Floating WhatsApp Button**: Personalized quick-contact icon.

## 🛠️ Technology Stack

- **React 18**: Frontend library for building the UI.
- **TypeScript**: Ensuring robust, type-safe development.
- **Tailwind CSS**: Utility-first styling for precise glassmorphism control.
- **Framer Motion**: Advanced physics-based animations.
- **React Router Dom**: Client-side routing for multipage experience.
- **Lucide React**: Clean and modern icon system.
- **EmailJS**: Direct email integration without a traditional backend.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd DeepNix
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy the sample file and fill in your credentials:
   ```bash
   cp .env.sample .env
   ```

### Running Locally

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📧 Email Service Setup (EmailJS)

DeepNix uses a pure frontend solution for email submissions. To enable the contact form:

1.  **Account**: Sign up at [EmailJS](https://www.emailjs.com/).
2.  **Service**: Connect your Gmail service (`deepnixcompany@gmail.com`).
3.  **Template**: Create a new email template.
    - Set the subject to: `New Contact from {{from_name}} - {{subject}}`
    - Use the branded HTML template (found in `docs/email_template.html` or from past implementation docs).
4.  **Environment Variables**: Add your `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` to your `.env` file:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

---

## 📂 Project Structure

```text
DeepNix/
├── public/              # Static assets and icons
├── src/
│   ├── assets/          # Project images and logo files
│   ├── components/      # Modular React sections (Home, About, etc.)
│   ├── App.tsx          # Main application wrapper and routes
│   ├── main.tsx         # Framework entry point
│   └── index.css        # Global CSS and Tailwind directives
├── .env.sample          # Environment configuration template
├── tailwind.config.js   # Custom theme and glassmorphism utility
└── vite.config.ts       # Build and plugin configuration
```

---

## 🚢 Deployment

The project is optimized for static hosting providers like **Vercel**, **Netlify**, or **GitHub Pages**.

1.  Ensure all environment variables are added to your hosting provider's dashboard.
2.  Point the build command to `npm run build` and the output directory to `dist`.

---

## 📄 License

This project is proprietary. All rights reserved by **DeepNix**.
