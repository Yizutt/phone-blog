import fs from 'fs';
import matter from 'gray-matter';
import markdownIt from 'markdown-it';
const md = markdownIt({ html: true, linkify: true });
const files = fs.readdirSync('./posts').filter(f => f.endsWith('.md'));
const index = files.map(f => {
  const raw = fs.readFileSync(`./posts/${f}`, 'utf-8');
  const { data, content } = matter(raw);
  return { slug: f.replace(/\.md$/, ''), frontMatter: data, html: md.render(content) };
});
fs.writeFileSync('./src/data/posts.json', JSON.stringify(index, null, 2));
