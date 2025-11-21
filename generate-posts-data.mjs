import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const articlesDir = path.resolve(process.cwd(), 'src/posts');
const outputFilePath = path.resolve(process.cwd(), 'src/posts.json');

const fileNames = fs.readdirSync(articlesDir);

const allPostsData = fileNames.map(fileName => {
  const slug = fileName.replace(/\.md$/, '').replace(/\.mdx$/, '');
  const fullPath = path.join(articlesDir, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const htmlContent = marked(content);

  if (fileName.endsWith('.mdx')) {
    return {
      slug,
      type: 'mdx',
      ...data,
      content: content, // Keep raw MDX content
    };
  } else {
    return {
      slug,
      type: 'md',
      ...data,
      content: htmlContent, // Convert MD to HTML
    };
  }
});

fs.writeFileSync(outputFilePath, JSON.stringify(allPostsData, null, 2));

console.log(`Successfully generated posts data at ${outputFilePath}`);
