import React, { useEffect, useState } from 'react';
import produtosService from '../services/ProdutosService';

const ProdutoComentarios = ({produto, novo = false}) => {
  const [comentarios, setComentarios] = useState([]);

  const [novoComentario, setNovoComentario] = useState('');
  const [autor, setAutor] = useState('');


  useEffect(() => {
    const fetchComentarios = async () => {
      const comentariosResult = produtosService.getComentariosByProdutosId(produto?.id);
      setComentarios(comentariosResult);
    }

    fetchComentarios();
  }, []);

  const handleAddComentario = async () => {
    if (!novoComentario || !autor) {
      return;
    }

    const novoComentarioObj = {
      idProduto: produto.id,
      comentario: novoComentario,
      autor,
      data: new Date().toISOString().split('T')[0],
    };

    const addedComentario = await produtosService.addComentario(produto, novoComentarioObj);

    setComentarios([...comentarios, addedComentario]);

    setNovoComentario('');
    setAutor('');
  };

  return (
    <div className="container mt-5">
        {
          novo ? 
            (
              <div className="card p-3">
                <h5 className="mb-3">Adicionar Comentário</h5>
                <div className="mb-3">
                  <label htmlFor="autorInput" className="form-label">
                    Autor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="autorInput"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="comentarioInput" className="form-label">
                    Comentário
                  </label>
                  <textarea
                    className="form-control"
                    id="comentarioInput"
                    rows="3"
                    value={novoComentario}
                    onChange={(e) => setNovoComentario(e.target.value)}
                  />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleAddComentario}>
                  Enviar Comentário
                </button>
              </div>
            )
            :
            (<></>)
        }

        {comentarios?.length > 0 ? (
          <div className="list-group">
            {comentarios.map((comentario, index) => (
              <div key={index} className="list-group-item">
                <div className="d-flex align-items-start">
                <img
                  src={'default-avatar.png'}
                  alt="Avatar"
                  className="rounded-circle"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
                  <div className="ms-3">
                    <h5 className="fw-bold mb-1">{comentario?.autor}</h5>
                    <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>
                      {new Date(comentario?.data).toLocaleDateString('pt-BR')}
                    </p>
                    <p>{comentario?.comentario}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">Sem comentários</p>
        )}
    </div>
  );
};

export default ProdutoComentarios;
