import React from 'react';

const About = () => (
  <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Sobre o Projeto</h1>
          <p>Este é um projeto de listagem de produtos desenvolvido no IFAL como parte da disciplina de Programação Web 2. O objetivo principal é criar uma aplicação web que permita aos usuários visualizar e gerenciar produtos de forma eficiente.</p>
          <p><strong>Equipe de Desenvolvimento:</strong></p>
          <ul>
            <li>Nome do Aluno 1 - Cargo</li>
            <li>Nome do Aluno 2 - Cargo</li>
            <li>Nome do Aluno 3 - Cargo</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src="about/imagem1.jpg" alt="Descrição da imagem 1" className="img-fluid" />
          <p>Descrição da imagem 1</p>
          <img src="about/imagem2.jpg" alt="Descrição da imagem 2" className="img-fluid" />
          <p>Descrição da imagem 2</p>
        </div>
      </div>
    </div>
);

export default About;
