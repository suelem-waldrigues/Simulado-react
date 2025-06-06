import { Link } from 'react-router-dom';
import './Produtos.css';

function Produtos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  if (produtos.length === 0) {
    return <p>Nenhum produto cadastrado.</p>;
  }

  return (
    <div className="produtos">
      <h2>Produtos Cadastrados</h2>
      <p>Total de produtos: {produtos.length}</p>

      {produtos.map((produto) => (
        <div className="produto-card" key={produto.id}>
          <span>
            <strong>{produto.nome}</strong> - R$ {produto.preco}
          </span>
          <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
        </div>
      ))}
    </div>
  );
}

export default Produtos;

