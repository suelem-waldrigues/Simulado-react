import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ background: 'blue', padding: '1rem' }}>
      <h1>MiniStore</h1>
      <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
      <Link to="/produtos" style={{ color: 'white', marginRight: '1rem' }}>Produtos</Link>
      <Link to="/cadastrar" style={{ color: 'white' }}>Cadastrar</Link>
    </nav>
  );
}

export default Header;

