import { Link } from 'react-router-dom';

function Produtos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  if (produtos.length === 0) {
    return <p>Nenhum produto cadastrado.</p>;
  }

  return (
    <div>
      <h2>Produtos Cadastrados</h2>
      <p>Total: {produtos.length}</p>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            {p.nome} - R$ {p.preco}
            {' '}
            <Link to={`/produtos/${p.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
