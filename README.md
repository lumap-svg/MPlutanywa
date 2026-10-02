# MPLutanywa Portfolio 🚀

> Personal developer portfolio and technical showcase for **Peter Lutanywa (MPLutanywa)** — Full-Stack Software Engineer & Networking Specialist.

Built with **Next.js 15 (App Router & Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 📌 Project Overview

This portfolio showcases full-stack development expertise spanning backend architecture (Django, Python, PostgreSQL, REST APIs), modern frontend engineering (Next.js, React, Tailwind CSS), and systems networking.

### Core Pages & Routes

| Route | File Path | Description |
| :--- | :--- | :--- |
| `/` | [`src/app/page.tsx`](src/app/page.tsx) | Landing page with hero statement, core engineering pillars, featured project highlights, and call-to-action |
| `/about` | [`src/app/about/page.tsx`](src/app/about/page.tsx) | Engineering journey, philosophy, backend/frontend approach, and infrastructure background |
| `/skills` | [`src/app/skills/page.tsx`](src/app/skills/page.tsx) | Categorized tech stack: Backend, Frontend, Networking & Systems, Databases, and Developer Tooling |
| `/experience` | [`src/app/experience/page.tsx`](src/app/experience/page.tsx) | Chronological experience timeline, responsibilities, and technical milestones |
| `/projects` | [`src/app/projects/page.tsx`](src/app/projects/page.tsx) | Interactive project cards, architecture highlights, tech stack tags, and repository links |
| `/contact` | [`src/app/contact/page.tsx`](src/app/contact/page.tsx) | Accessible contact form, pre-filled email client dispatch, and direct contact details |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15.5.2 (App Router with Turbopack)
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Fonts**: `next/font` (Geist & Geist Mono)
- **Components**:
  - [`Navbar`](src/app/components/Navbar.tsx): Sticky backdrop-blur header, responsive mobile navigation menu, and active route indicators.
  - [`Footer`](src/app/components/Footer.tsx): Site links, direct social links (GitHub, Email), and live availability indicator.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** installed.

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/lumap-svg/MPlutanywa.git
cd MPlutanywa
npm install
```

### 3. Development Server
Start the Turbopack development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Linting
Run ESLint:

```bash
npm run lint
```

### 5. Production Build
Compile optimized production assets:

```bash
npm run build
npm start
```

---

## 📂 Asset Management & Customization

The project includes structured asset directories under `public/`:

```
public/
├── icons/                  # Custom SVG or favicon icons
└── images/
    ├── profile/            # Place your headshot / avatar here (e.g., avatar.jpg)
    ├── projects/           # Screenshots of featured applications
    └── technologies/       # Badges or logos for tools & libraries
```

### How to Add Your Own Assets

1. **Profile Picture**:
   - Place an image in `public/images/profile/avatar.jpg`.
   - In `src/app/about/page.tsx` or `src/app/page.tsx`, import `next/image` and reference `/images/profile/avatar.jpg`.

2. **Project Screenshots**:
   - Save screenshots in `public/images/projects/<project-name>.png`.
   - Update the `PROJECTS` array in `src/app/projects/page.tsx` with an `imageUrl` property.

3. **Contact Information & Social Handles**:
   - Primary contact email: `lutanywapeter@gmail.com` (configured in `Navbar.tsx`, `Footer.tsx`, and `contact/page.tsx`).
   - GitHub handle: `https://github.com/lumap-svg` (or your preferred alias).

---

## 🌐 Deployment

The application is pre-configured for seamless deployment to **Vercel**:

1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio routes and components"
   git push origin mpl
   ```
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js and deploys with optimal caching, edge routing, and image optimization.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
