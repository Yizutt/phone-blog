import { useParams } from 'react-router-dom';
import postsData from '../data/posts.json';
export default function Post() {
  const { slug } = useParams();
  const post = postsData.find(p => p.slug === slug);
  if (!post) return <p>文章不存在</p>;
  return (
    <div style={{ padding: '1rem' }}>
      <h1>{post.frontMatter.title}</h1>
      <p>{post.frontMatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
