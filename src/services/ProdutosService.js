
class ProdutosService {
  produtos = [
    { id: 1, nome: 'Chanel No.5', categoria: 'perfume', descricao: 'Clássico atemporal da Chanel.', valor: 350 },
    { id: 2, nome: 'Dior Sauvage', categoria: 'perfume', descricao: 'Amadeirado aromático, ideal para homens.', valor: 280 },
    { id: 3,  nome: 'Yves Saint Laurent Black Opium', categoria: 'perfume', descricao: 'Oriental floral, marcante e intenso.', valor: 320 },
    { id: 4,  nome: 'Gucci Bloom', categoria: 'perfume', descricao: 'Floral fresco e vibrante.', valor: 300 },
    { id: 5,  nome: 'Paco Rabanne One Million',  categoria: 'perfume', descricao: 'Amadeirado especiado, marcante e sensual.', valor: 290 },
    { id: 6,  nome: 'Carolina Herrera Good Girl', categoria: 'perfume', descricao: 'Oriental floral, com notas de amêndoa e jasmim.', valor: 310 },
    { id: 7,  nome: 'Versace Bright Crystal', categoria: 'perfume', descricao: 'Floral frutado, fresco e elegante.', valor: 270 },
    { id: 8,  nome: 'Jean Paul Gaultier Le Male', categoria: 'perfume', descricao: 'Amadeirado aromático, clássico e atemporal.', valor: 260 },

    { id: 11, nome: 'Apple Watch Series 8', categoria: 'relogio', descricao: 'Smartwatch da Apple com diversas funcionalidades.', valor: 1500 },
    { id: 12, nome: 'Samsung Galaxy Watch5', categoria: 'relogio', descricao: 'Smartwatch Samsung com monitoramento completo da saúde.', valor: 1200 },
    { id: 13,  nome: 'Amazfit GTR 4', categoria: 'relogio', descricao: 'Smartwatch Amazfit com excelente autonomia de bateria.', valor: 500 },
    { id: 14,  nome: 'Garmin Fenix 7', categoria: 'relogio', descricao: 'Relógio esportivo Garmin com GPS e diversas métricas.', valor: 1800 },
    { id: 15,  nome: 'Fossil Gen 6', categoria: 'relogio', descricao: 'Smartwatch Fossil com design elegante e funcionalidades básicas.', valor: 800 },
    { id: 16,  nome: 'Suunto 9 Baro', categoria: 'relogio', descricao: 'Relógio multi-esporte Suunto para atividades outdoor.', valor: 1000 },
    { id: 17,  nome: 'TicWatch Pro 3', categoria: 'relogio', descricao: 'Smartwatch híbrido com Wear OS.', valor: 700 },

    { id: 21, nome: 'Nivea Creme', categoria: 'cosmetico', descricao: 'Hidratante facial clássico.', valor: 20 },
    { id: 22, nome: 'Pantene Shampoo', categoria: 'cosmetico', descricao: 'Shampoo para cabelos danificados.', valor: 30 },
  ];

  comentarios = [
    {
      idProduto: 1,
      comentario: "Produto excelente! Superou minhas expectativas.",
      autor: "João Silva",
      data: "2023-11-22"
    },
    {
      idProduto: 2,
      comentario: "O produto chegou antes do prazo e está em perfeito estado.",
      autor: "Ana Maria",
      data: "2023-12-05"
    },
    {
      idProduto: 1,
      comentario: "A cor do produto não é exatamente como na foto.",
      autor: "Pedro Santos",
      data: "2023-11-28"
    },
    // ... adicione mais comentários aqui
    {
      idProduto: 3,
      comentario: "Produto muito bom, recomendo!",
      autor: "Maria Fernanda",
      data: "2023-12-01"
    },
    {
      idProduto: 2,
      comentario: "O produto apresentou um defeito após alguns dias de uso.",
      autor: "Carlos Oliveira",
      data: "2023-12-03"
    }
  ];

  getProdutoById(id) {
    return this.produtos.find(produto => produto.id === parseInt(id));
  }
  getProdutos() {
    return this.produtos;
  }

  getComentariosByProdutosId(idProduto) {
    return this.comentarios.filter(comentario => comentario.idProduto === parseInt(idProduto));
  }

  addComentario(produto,comentario) {
    this.comentarios.push({...comentario});
    return comentario;
  }
}

const produtosService = new ProdutosService();

export default produtosService;