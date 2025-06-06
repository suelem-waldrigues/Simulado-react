import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/produtos1/Produtos';
import Cadastrar from './pages/Cadastrar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductDetails from './components/product/ProductDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/produtos/:id" element={<ProductDetails />} />
      </Routes>

      <Footer /> {}
    </Router>
  );
}


export default App;
