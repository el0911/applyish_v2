import { generateSitemap } from '@forge42/seo-tools/sitemap';

// save the sitemap to a file
import fs from 'fs';
import path from 'path';
import { getALlPublicRoutes } from './src/get-routes.mjs';

const generateSitemapFunc = async () => {
    const sitemap = generateSitemap(
        {
            domain: "https://applyish.com",
            // Defines the routes you want to exclude from the sitemap (useful if routes are dynamic or auto-generated)
            ignore: ["/dashboard*"],
            // Defines the routes you want to include in the sitemap
            routes: getALlPublicRoutes(), 
            // This is a transformer that allows you to generate the url you need
            transformer: ({ url, domain }) => `${domain}${url}`

        }
    );

    const sitemaptext = await sitemap

    return sitemaptext
}


generateSitemapFunc().then(sitemap => {
    console.log("Sitemap generated successfully." );
    console.log(sitemap);
    // sitemap.toFile('./public/sitemap.xml'); // Output the sitemap to the public folder
    const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap, 'utf8');
}).catch(error => {
    console.error("Error generating sitemap:", error);
});



// <?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// 	<url>
// 		<loc>https://example.com/</loc>
// 		<lastmod>2020-02-02</lastmod>
// 		<changefreq>monthly</changefreq>
// 		<priority>0.8</priority>
// 	</url>
// 	<url>
// 		<loc>https://example.com/about</loc>
// 		<lastmod>2020-02-02</lastmod>
// 		<changefreq>monthly</changefreq>
// 		<priority>0.8</priority>
// 	</url>
// 	<url>
// 		<loc>https://example.com/contact</loc>
// 		<lastmod>2020-02-02</lastmod>
// 		<changefreq>monthly</changefreq>
// 		<priority>0.8</priority>
// 	</url>
// </urlset>