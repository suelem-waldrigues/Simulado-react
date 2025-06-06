import { Link } from 'react-router-dom';
import './Header.css'; // importa o CSS

function Header() {
  return (
    <nav className="header">
      <h1>MiniStore</h1>
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/cadastrar">Cadastrar</Link>
    </nav>
  );
}

export default Header;

