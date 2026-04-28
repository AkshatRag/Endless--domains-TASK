# Architecture Decisions: RecehTok Dashboard

I built the RecehTok Dashboard with a focus on "clean code meets high-end design." Here are the key architectural choices:

*   **Hybrid Rendering Strategy**: The main dashboard is a **Server Component** to keep the initial load snappy. I isolated the **Sidebar** and **Charts** as **Client Components** because they require real-time interactivity (like mobile toggles and animated data tooltips) that only runs in the browser.
*   **Neon & Glassmorphism UI**: To capture the premium crypto aesthetic, I used **Tailwind v4** with custom CSS variables for neon colors. By combining `backdrop-blur` with absolute-positioned "glow" layers, I achieved the depth and vibrancy seen in the Figma design.
*   **Recharts for Data**: I chose **Recharts** because it provides deep access to SVG properties. This allowed me to implement custom linear gradients and overlapping neon lines for the portfolio chart, which is much harder to do with more rigid chart libraries.
*   **TypeScript & Data Integrity**: I used strict interfaces for every `Coin` and `Transaction` object. This ensures that the UI components always receive correctly formatted data, preventing the common "undefined" errors that pop up when building complex dashboards.
