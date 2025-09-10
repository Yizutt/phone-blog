import { Link } from 'react-router-dom';
import postsData from '../data/posts.json';
export default function Home() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>文章列表</h1>
      {postsData.map(p => (
        <article key={p.slug} style={{ marginBottom: '1rem' }}>
          <h2><Link to={`/post/${p.slug}`}>{p.frontMatter.title}</Link></h2>
          <p>{p.frontMatter.date} · {p.frontMatter.tags.join(', ')}</p>
        </article>
      ))}
    </div>
  );
}
