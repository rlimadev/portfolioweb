import React from "react";

import Header from "../../Header";
import Crumb from "../../Crumb";
import Med1 from "../../../assets/img/med1.jpg";
import Med2 from "../../../assets/img/med2.jpg";
import Med3 from "../../../assets/img/med3.jpg";

import {
  Container,
  Title,
  Subtitile,
  Nav,
  Text,
  Link,
  Iframe,
} from "../stylesProject";

const MedSoft = () => {
  return (
    <Container>
      <Header />
      <Nav>
        <Crumb page="Portfólio" project="MedSoft" link="portfolio" />
      </Nav>
      <Title>Medsoft</Title>
      <Subtitile>Descrição do projeto</Subtitile>
      <Text>
        <p>
          O MEDSOFT é uma plataforma de treinamento exclusiva para aos alunos do
          MEDGRUPO e que permite o acesso a um banco de provas com mais de
          60.000 questões comentadas em texto e vídeo. Através dos filtros
          disponíveis no software, você poderá montar suas próprias provas,
          selecionando por grande área, por concurso, por ano, por estado e até
          por palavra-chave!
        </p>
        <p>Faça as combinações que você quiser e otimize o seu treinamento. </p>
        <p> Assista o video!</p>
      </Text>
      <Iframe
        width="100%"
        height="720"
        src="https://www.youtube-nocookie.com/embed/QnoXC3OvlLo?rel=0&amp;controls=0&amp;showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="hi"
      ></Iframe>
      <Text>
        <p>
          {" "}
          Rica aplicação enterprise que facilitou a vida da maior empresa do
          ramo de ensino médico da américa latina. Desenvolvi tudo o fluxo de
          comunicação entre o frontend e backend, sistema de chats, video e
          outros dezenas de componentes.
        </p>
      </Text>
      <img src={Med1} alt="Med1" />
      <Text>
        <p>
          {" "}
          Tecnologias utilizadas: Adobe FlashPlayer no frontend e .NET framework
          com ActiveX no backend.{" "}
        </p>
      </Text>
      <img src={Med2} alt="Med2" />
      <img src={Med3} alt="Med3" />
      <Link href="#">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default MedSoft;
