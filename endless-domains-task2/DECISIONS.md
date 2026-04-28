# Architecture Decisions: Domain Detail Page

I implemented the domain page as a **Server Component** to ensure fast initial loads and solid SEO. It allows the server to handle data filtering privately, keeping our logic secure and preventing the client from downloading the entire dataset. I kept the **AddToCartButton** as a **Client Component** because it requires stateful interactivity that only happens in the browser.

If the whole page were a client component, we’d lose automatic SEO metadata and suffer from "hydration lag," forcing users to wait for JavaScript just to see basic content. 

**TypeScript** is my safety net at this server-client boundary. It acts as a strict contract, ensuring the data fetched on the server matches exactly what the interactive components expect. This prevents runtime "undefined" errors and makes the codebase much more reliable and easier to scale as I grow the project.
