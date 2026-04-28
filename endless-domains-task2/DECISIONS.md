# Architecture Decisions: Domain Detail Page

The domain detail page is implemented as a **Server Component** to optimize performance and SEO. By fetching data on the server, we reduce the client-side JavaScript payload and ensure sensitive logic stays off the browser. Conversely, the `AddToCartButton` is a **Client Component** because it requires stateful interactivity (`useState`) and event listeners that only run in the browser.

If the main page were a Client Component, we would lose automatic SEO metadata generation and force the client to download the entire domain dataset just to filter for one record, leading to "waterfall" delays and privacy leaks.

**TypeScript** is critical at this boundary; it ensures that the data fetched by the server exactly matches the props expected by the client component. This prevents runtime "undefined" errors when accessing domain properties and guarantees type safety across the network bridge, catching schema mismatches during development.
