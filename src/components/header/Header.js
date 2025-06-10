import { Link } from 'react-router-dom';
import './Header.css'; // importa o CSS
import Titulo from '../Titulo.js';

function Header() {
  return (
    <nav className="header">
      <Titulo>MiniStore</Titulo>
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/cadastrar">Cadastrar</Link>
    </nav>
  );
}




export default Header;