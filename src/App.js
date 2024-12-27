import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProdutoDetalhe from './components/ProdutoDetalhe';
import ProdutosList from './components/ProdutosList';
import Navbar from './components/Navbar';
import ProdutoEditar from './components/ProdutoEditar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/produtos" element={<ProdutosList />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
        <Route path="/produtos/:id/editar" element={<ProdutoEditar />} />
      </Routes>
    </>
  );
}

export default App;
