# CampusPe Landing Page

Responsive landing-page starter built with Next.js App Router, React, and CSS.

## Requirements
- Node.js 20.9+ (Node.js 22 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. Sign in at https://vercel.com and choose **Add New → Project**.
3. Import your GitHub repository.
4. Keep the framework preset as Next.js and click **Deploy**.
5. Vercel will provide the live URL.

## Important design note
This is a responsive implementation based on the supplied zoomed-out Figma screenshot. For a pixel-accurate match, replace the sample content and CSS-built phone illustration with the exact copy, images, icons, fonts, and measurements from the original Figma frame.

## Project structure
```
campuspe-landing/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── .gitignore
├── eslint.config.mjs
├── next.config.mjs
├── package.json
└── README.md
```

## CTA and navigation
- Header navigation scrolls to page sections.
- Mobile navigation opens and closes.
- FAQ rows expand and collapse.
- Main CTAs scroll to the get-started section or open an email action.
- Buttons and cards include hover, active, and keyboard focus states.
