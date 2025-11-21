import fs from 'fs';
import path from 'path';

export const getALlPublicRoutes = () => {
  const routes = [
    { url: "/", component: null, exact: true },
    // { path: "/login", component: null },
    // { path: "/signup/influencer", component: null },
    // { path: "/signup/buyer", component: null },
    { url: "/blog", component: null, exact: true },
    // { path: "/blog/:slug", component: null },
    // { path: "/privacy", component: null },
    // { path: "/terms", component: null },
    // { path: "/reset-password", component: null },
    // { path: "/reset-password/:token", component: null },
  ];

  const articlesDir = path.resolve(process.cwd(), './src/posts.json');
  // Read the posts.json file
  const postsData = JSON.parse(fs.readFileSync(articlesDir, 'utf8'));
  postsData.forEach(file => {
    routes.push({ url: `/blog/${file.id}` });
  });
  return  routes
}

