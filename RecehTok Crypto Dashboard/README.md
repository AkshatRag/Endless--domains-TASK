# RecehTok Crypto Dashboard

## Overview
This is a modern, dark-themed cryptocurrency dashboard built with Next.js 15 (App Router), React, TypeScript, and Tailwind CSS. It implements a high-fidelity Figma design featuring neon glow accents, glassmorphism, and dynamic charts.

## Technologies Used
- Next.js 15 (App Router)
- React 19
- TypeScript (Strict Mode)
- Tailwind CSS v4
- Recharts (for data visualization)
- Framer Motion (for smooth micro-interactions)
- Lucide React (for scalable vector icons)

## Structure Overview
The project strictly follows a clean architecture:
- `/app/dashboard/page.tsx`: The main server component rendering the dashboard layout.
- `/components`: Contains isolated, highly focused, and reusable UI components.
  - `Sidebar.tsx`: Client-side navigation component with mobile responsive toggle.
  - `PortfolioChart.tsx`: Client-side Recharts implementation with animated area lines and custom gradients.
  - `StatCard.tsx`: Reusable wallet statistic cards with dynamic neon glow logic based on active states.
  - `CoinList.tsx` & `CoinRow.tsx`: Separated list and item components for clean mapping of trend data.
  - `TransactionHistory.tsx`: Displays recent transaction activities.
- `/data`: Contains mocked typed arrays to simulate database fetching.
- `/types`: Contains strict TypeScript interfaces (`Coin`, `Transaction`) ensuring data integrity.
- `/lib`: Utilities, notably `cn()` for Tailwind class merging with `clsx` and `tailwind-merge`.

## Design Decisions & Aesthetics
1. **Neon Glow & Glassmorphism**: Heavily utilized `backdrop-blur`, absolute positioning for glow layers, and custom `drop-shadow` classes to accurately replicate the Figma neon aesthetic.
2. **Tailwind v4 Integration**: Used standard Tailwind v4 approaches. Modified `globals.css` to introduce precise CSS variables for core neon colors.
3. **Recharts Customization**: Leveraged SVG `linearGradient` and `CartesianGrid` adjustments within Recharts to achieve the smooth, overlapping, multi-colored neon area lines seen in the design.
4. **Mobile Responsiveness**: Implemented a responsive sidebar that collapses into a hamburger menu on smaller screens. The main layout gracefully stacks from multi-column grids to single columns.
5. **Typescript Strictness**: Used precise typing for components and data sets. Avoided all `any` types.

## Installation Steps
1. Make sure you have Node.js installed.
2. Run `npm install` to install all dependencies.

## Run Commands
To run the development server:
`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You will automatically be redirected to `/dashboard`.
