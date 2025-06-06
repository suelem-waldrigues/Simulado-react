import { Link } from 'react-router-dom';
import './Produtos.css';

function Produtos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  if (produtos.length === 0) {
    return <p>Nenhum produto cadastrado.</p>;
  }

  return (
    <div className="produtos-container">
      <h2>Produtos Cadastrados</h2>
      <p>Total: {produtos.length}</p>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
            {' '}
        
            <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
