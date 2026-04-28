# RecehTok Dashboard + Domain Detail — Next.js Assessment

## Overview

This repository contains my submission for the Frontend Engineer (Junior) assessment. It includes two tasks focused on design-to-code implementation and understanding of Next.js App Router fundamentals.

* **Task 1:** RecehTok Crypto Dashboard (Design → Code)
* **Task 2:** Domain Detail Page (Server vs Client Component Thinking)

The goal was not just to replicate UI, but to produce **clean, typed, and reviewable code** that a senior engineer could easily understand and extend.

---

## Tech Stack

* Next.js (App Router)
* React
* TypeScript (strict mode)
* Tailwind CSS
* Recharts (for chart)
* Framer Motion (for animations)

---

## Task 1 — RecehTok Crypto Dashboard

### Approach

I started by carefully analyzing the Figma file to understand:

* spacing and layout hierarchy
* glow and blur effects
* component boundaries

Instead of directly coding the entire page, I first broke the UI into logical components:

* Sidebar
* StatCard
* PortfolioChart
* CoinList
* CoinRow
* TransactionHistory

This helped keep the structure modular and readable.

### Key Focus Areas

* **Design fidelity:** Matching the dark theme, neon glow, and glassmorphism effects
* **Component structure:** Keeping each component isolated and reusable
* **TypeScript:** Defining clear interfaces for props and data models
* **Animations:** Implementing chart animation and hover interactions
* **Responsiveness:** Ensuring layout adapts without breaking visual effects

### Challenges & Learnings

* Achieving **realistic glow + backdrop blur** required experimentation with Tailwind utilities and custom shadows
* Handling **Recharts layout issues** (like container height bugs) helped me understand how rendering depends on parent dimensions
* Balancing **visual polish vs clean code structure** was a key learning

---

## Task 2 — Domain Detail Page

### Objective

This task focused on understanding:

* Server vs Client Components
* Dynamic routing in Next.js App Router
* Type safety across component boundaries

### Implementation

* Created dynamic route: `/domain/[name]`
* Page is implemented as a **Server Component**
* "Add to Cart" button is a **Client Component** (`"use client"`)
* Added `loading.tsx` for route-level loading state
* Mocked domain data with strict TypeScript types

### Key Learning

This task clarified:

* why server components are better for static/data-driven rendering
* when client components are necessary (interactivity)
* how TypeScript ensures consistency between server and client boundaries

---

## Use of AI (Honest Reflection)

I used  Antigravity as a **development assistant**, not a final solution generator.

### How I used AI

* Generating initial component scaffolding
* Understanding Next.js patterns and best practices
* Debugging issues like dependency conflicts and chart rendering bugs

### What I had to fix manually

AI outputs were not always correct. I had to:

* Refactor **incorrect or outdated patterns** (e.g., legacy Next.js usage)
* Fix **dependency conflicts and version mismatches**
* Correct **TypeScript issues** (removing `any`, adding proper interfaces)
* Improve **UI accuracy** (especially glow, blur, and spacing)
* Debug runtime issues (e.g., Recharts container sizing errors)

### Key takeaway

AI accelerated development, but:

> **final correctness, structure, and polish required manual reasoning and refactoring**

---

## What I Learned

Through this project, I significantly improved my understanding of:

* Next.js App Router (server vs client components)
* Structuring scalable frontend components
* Writing cleaner TypeScript for UI applications
* Handling real-world UI challenges (charts, responsiveness, effects)
* Debugging dependency and rendering issues

This was also my first time working deeply with:

* Recharts
* Advanced Tailwind effects (glassmorphism + neon glow)
* Framer Motion in a structured project

---

## Running the Project

```bash
npm install
npm run dev
```

Then open:

* http://localhost:3000/dashboard
* http://localhost:3000/domain/example.com

---

## Final Thoughts

This project pushed me beyond just building visually appealing interfaces. It helped me focus on:

* writing code that is easy to review
* structuring components properly
* understanding how modern Next.js applications should be built

I approached this as both a learning experience and an opportunity to demonstrate how I think as a frontend developer.

---
