# SmallCloud Website (smallcloud.si)

> Simple application deployment without the server headache.

This is the production-ready marketing website and interactive SaaS product console for **SmallCloud**, an Indian developer-focused application hosting and deployment platform built for fast-shipping teams.

## Design Philosophy

- **Developer Infrastructure Aesthetic**: Restrained, calm, technical, and trustworthy — designed like serious infrastructure software (Vercel, Railway, Render, Linear, Stripe, Cloudflare).
- **OLED Dark Mode**: Seamless support for both crisp light mode and true pitch-black dark mode (`#000000` canvas, `#0A0A0A` cards, `#1F1F1F` borders), with system preference detection and manual toggle saved in `localStorage`.
- **Indian Cloud Infrastructure**: Tailored for Indian developers, startups, and agencies with `ap-south-1` (Mumbai & Bengaluru) deployment routing, DPDP Act compliance, and transparent INR (₹) / USD ($) pricing.
- **Micro-Animations with Framer Motion**: Restrained GPU-accelerated motion (sliding pill indicators, spring modals, live pipeline beams, smooth accordions).
- **No AI clichés**: No cartoon illustrations, glowing blobs, excessive purple/pink gradients, stock photos, fake testimonials, fake customer logos, or hyperbolic marketing jargon.
- **Realistic SaaS UI**: Features interactive components that look and feel like an authentic developer platform:
  - Live deployment simulator on the hero section with preset switches (Next.js, FastAPI, Astro)
  - Interactive Console Dashboard showcase with tabs (Overview, Projects, Deployments, Domains, Environment Variables, Settings)
  - Streaming build log viewer and 7-stage infrastructure timeline
  - Custom domain verification & DNS guide simulator
  - Interactive "Deploy your first app" wizard modal
  - Comprehensive in-browser documentation drawer
  - Clean FAQ accordion with instant search filter
  - Transparent pricing tiers with placeholder badge

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v3 with dark mode class support (`darkMode: 'class'`), developer grid patterns & subtle scrollbars
- **Theme Management**: Custom React `ThemeProvider` + `useTheme` hook with persistence
- **Icons**: Lucide React
- **Fonts**: Inter (Sans) & JetBrains Mono (Monospace)
- **Animation**: Framer Motion

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Production Build

The production build compiles into optimized static HTML, CSS, and JS in the `dist/` directory, ready to deploy to any edge static CDN or SmallCloud itself.
