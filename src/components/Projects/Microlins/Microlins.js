import React from "react";

import Crumb from "../../Crumb";
import Header from "../../Header";
import Microlins1 from "../../../assets/img/lins1.jpg";
import Microlins2 from "../../../assets/img/lins2.jpg";

import { Container, Title, Subtitile, Nav, Text, Link } from "../stylesProject";

const Microlins = () => {
  return (
    <Container>
      <Header />
      <Nav>
        <Crumb page="Portfólio" project="Microlins" link="portfolio" />
      </Nav>
      <Title>Microlins</Title>
      <Subtitile>Descrição do projeto</Subtitile>
      <Text>
        <p>
          {" "}
          Jogo Interativo desenvolvido em parceria com a Boxis Interactive. O
          Objetivo do projeto é ajudar a Microlins com o marketing da empresa
          para catalogar um banco de dados de alunos de forma interativa e
          divertida.{" "}
        </p>
      </Text>
      <img src={Microlins1} alt="Microlins1" />
      <Text>
        <p>
          Tecnologias utilizadas: Adobe AIR SDK (Windows) e SQLite para
          armazenamento do banco.
        </p>
      </Text>
      <img src={Microlins2} alt="Microlins2" />
      <Link href="#">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default Microlins;
