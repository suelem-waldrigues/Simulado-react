import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastrar() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  function salvarProduto() {
    const novoProduto = {
      id: Date.now(),
      nome,
      preco,
      descricao
    };

    const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtosSalvos.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtosSalvos));

    alert('Produto salvo com sucesso!');
    navigate('/produtos');
  }

  return (
    <div>
      <h2>Cadastro de Produto</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <br />

      <textarea
        placeholder="Descrição (opcional)"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <br />

      <button onClick={salvarProduto}>Salvar</button>
    </div>
  );
}

export default Cadastrar;
