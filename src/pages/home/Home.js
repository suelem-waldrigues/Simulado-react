import { Link } from 'react-router-dom';
import Titulo from '../../components/Titulo';
import './home.css';

function Home() {
  return (
    <div className="home">
      <Titulo>Bem-vindo à MiniStore!</Titulo>
      <p>Explore nosso catálogo e cadastre novos produtos.</p>
      <Link to="/produtos">Ver Produtos</Link> | <Link to="/cadastrar">Cadastrar Produto</Link>
    </div>
  );
}

export default Home;
