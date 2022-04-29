import React from "react";

import Header from "../../Header";
import Crumb from "../../Crumb";
import PhotoWork from "../../../assets/img/bura.jpg";
import PhotoWorking from "../../../assets/img/bura2.jpg";

import { Container, Nav, Title, Subtitile, Text, Link } from "../stylesProject";

const HoleGame = () => {
  return (
    <Container>
      <Header />
      <Nav>
        <Crumb page="Portfólio" project="Buraco Jogatina" link="portfolio" />
      </Nav>
      <Title>Buraco Jogatina</Title>
      <Subtitile>Descrição do projeto</Subtitile>
      <Text>
        <p>
          O aplicativo Web multi-player Buraco on-line do Jogatina é um dos
          passatempos preferidos dos brasileiros. Com mais de 4 milhões de
          brasileiros cadastrados, nele você pode convidar amigos para jogar,
          usar o chat do jogo e se divertir com até 4 pessoas ao mesmo tempo.
        </p>
      </Text>
      <img src={PhotoWork} alt="PhotoWork" />
      <Text>
        <p>
          {" "}
          Desenvolvi todo o lobby, sistemas de chat da aplicação com
          gerenciamento de estado do jogador (online, ocupado e offline),
          lidando com gigante fluxo de dados sumultaneos e em tempo real. <br />{" "}
          Gerenciamento de animações dos objetos UI, transições de popups e
          telas. Desenvolvimento de componentes avançados absolutamente do zero
          sem auxílio de frameworks de terceiros.
        </p>
      </Text>
      <img src={PhotoWorking} alt="PhotoWorking" />
      <Link href="#">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default HoleGame;
