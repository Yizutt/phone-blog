import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <nav style={{ padding: '1rem', background: '#282c34', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '1rem', color: '#61dafb' }}>首页</Link>
      <Link to="/about" style={{ color: '#61dafb' }}>关于我</Link>
    </nav>
  );
}
