# Yatri Adventure - Next.js (App Router) Implementation

This folder contains the complete Next.js 14/15 App Router TypeScript (`.tsx`) implementation for **Yatri Adventure**.

## Directory Architecture

```
nextjs-app/
├── app/
│   ├── layout.tsx         # Root layout with Metadata, Google Fonts & Header/Footer
│   ├── globals.css        # Tailwind CSS theme tokens & font setups
│   ├── page.tsx           # Home page with Hero, Featured Packages, Stories & Testimonials
│   ├── packages/
│   │   └── page.tsx       # Packages catalog with search, filter tabs & booking modal
│   ├── about/
│   │   └── page.tsx       # About us, 4 mountain pillars & FAQs
│   └── contact/
│       └── page.tsx       # Contact inquiry form & direct WhatsApp desk
├── components/
│   ├── Header.tsx         # Next.js Header with next/link navigation & mobile drawer
│   ├── Footer.tsx         # Next.js Footer with links and contact info
│   ├── HomeClient.tsx     # Client-side component managing interactive modals
│   ├── PackageDetailModal.tsx # Itinerary & dynamic booking price calculator
│   ├── PlanTripModal.tsx  # 3-step custom trip architect
│   ├── VideoPlayerModal.tsx   # 4K video player with elevation profile
│   └── ReviewModal.tsx    # Testimonial review submission form
└── data/
    └── mockData.ts        # Typed Himalayan treks, video stories & reviews
```

## How to Run in Next.js

1. In any empty folder, create a new Next.js app:
```bash
npx create-next-app@latest yatri-adventure --typescript --tailwind --app --eslint
```

2. Copy the files:
- Replace `app/` with `nextjs-app/app/`
- Copy `components/` to your project root or `src/components/`
- Copy `data/` to your project root or `src/data/`

3. Install icons and dependencies:
```bash
npm install lucide-react
```

4. Run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the live app.
