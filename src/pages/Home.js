import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vindo à MiniStore!</h1>
      <p>Explore nosso catálogo e cadastre novos produtos.</p>
      <Link to="/produtos">Ver Produtos</Link> | <Link to="/cadastrar">Cadastrar Produto</Link>
    </div>
  );
}

export default Home;
