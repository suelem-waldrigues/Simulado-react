import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo à MiniStore!</h1>
      <p>Explore nosso catálogo e cadastre novos produtos.</p>
      <Link to="/produtos">Ver Produtos</Link> | <Link to="/cadastrar">Cadastrar Produto</Link>
    </div>
  );
}

export default Home;
