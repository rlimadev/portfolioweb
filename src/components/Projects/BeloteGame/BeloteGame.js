import React from "react";

import Crumb from "../../Crumb";
import Header from "../../Header";
import Belo1 from "../../../assets/img/belo1.jpg";
import Belo2 from "../../../assets/img/belo2.jpg";

import { Container, Title, Subtitile, Nav, Text, Link } from "../stylesProject";

const BeloteGame = () => {
  return (
    <Container>
      <Header />
      <Nav>
        <Crumb page="Portfólio" project="Belote" link="portfolio" />
      </Nav>
      <Title>Belote</Title>
      <Subtitile>Descrição do projeto</Subtitile>
      <Text>
        <p>
          {" "}
          Jogo mobile multiplay de cartas muito jogado na França e na Europa
          Oriental.
        </p>
        <p>
          {" "}
          Desenvolvido para a empresa Jogatina. Participei de parte do projeto.
          Criação das telas principais, troca de mensagens entre client /
          servidor e criação de componentes.{" "}
        </p>
      </Text>
      <img src={Belo1} alt="Belo1" />
      <Text>
        <p>
          Tecnologias utilizadas: Adobe AIR SDK (Windows), StarlingMVC,
          Feathers, Starling, Lua, Java e ActionScript 3.0.
        </p>
      </Text>
      <img src={Belo2} alt="Belo2" />
      <Link href="#">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default BeloteGame;
