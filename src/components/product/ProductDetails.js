import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Product.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Produto carregado!");
    return () => {
      console.log("Saindo da página de detalhes.");
    };
  }, []);

  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="product-details">
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco}</p>
      <p>Descrição: {produto.descricao || 'Sem descrição'}</p>
      <button onClick={() => navigate('/produtos')}>Voltar</button>
    </div>
  );
}

export default ProductDetails;
