import path from 'path';
import fs from 'fs';
import express from 'express';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8000;
const app = express();
const staticDir = path.resolve(__dirname, 'dist');

// Read posts.json to dynamically generate blog routes
const postsPath = path.resolve(__dirname, 'src', 'posts.json');
const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));
const blogRoutes = posts.map(post => `/blog/${post.slug}`);

const routes = ['/', ...blogRoutes]; // Include root and all blog post routes

async function prerender() {
  app.use(express.static(staticDir));

  // This middleware will be executed for any request that hasn't been handled by express.static
  app.use((req, res, next) => {
    // If the request is for a file that doesn't exist, serve index.html
    if (!req.path.includes('.') && req.accepts('html')) {
      res.sendFile(path.join(staticDir, 'index.html'));
    } else {
      next(); // Otherwise, continue to the next middleware (or 404)
    }
  });

  const server = app.listen(PORT, () => {});

  const browser = await puppeteer.launch({ args: ['--no-sandbox'], protocolTimeout: 240000 });
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    await page.goto(url, { waitUntil: 'networkidle0' });

    let html = await page.content();

    // Remove the problematic Umami analytics script
    const scriptToRemove = `<script>
      if (import.meta.env.PROD) {
        const script = document.createElement('script');
        script.defer = true;
        script.src = "https://cloud.umami.is/script.js";
        script.setAttribute('data-website-id', '7d885de1-c752-44dc-a771-53bffffc2359');
        document.head.appendChild(script);
      }
    </script>`;
    html = html.replace(scriptToRemove, '');

    // Save the prerendered HTML
    const outputPath = path.join(staticDir, route === '/' ? 'index.html' : `${route}.html`);
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputPath, html);
  }

  await browser.close();
  server.close(() => {});
}

prerender().catch(err => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});