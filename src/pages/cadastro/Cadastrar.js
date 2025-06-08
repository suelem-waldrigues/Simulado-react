import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Botao from '../../components/Botao';
import Titulo from '../../components/Titulo';
import './cadastrar.css';

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
    <div className="cadastrar">
      <Titulo>Cadastro de Produto</Titulo>

      <Input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <br />

      <Input placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} />
      <br />

      <TextArea placeholder="Descrição (opcional)" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <br />

      <Botao onClick={salvarProduto}>Salvar</Botao>
    </div>
  );
}

export default Cadastrar;
