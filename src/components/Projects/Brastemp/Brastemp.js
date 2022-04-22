import React from "react";

import Header from "../../Header";
import Crumb from "../../Crumb";
import Brastemp1 from "../../../assets/img/br1.jpg";
import Brastemp2 from "../../../assets/img/br2.jpg";
import Brastemp3 from "../../../assets/img/br3.jpg";

import { Container, Title, Subtitile, Nav, Text, Link } from "../stylesProject";

const Brastemp = () => {
  return (
    <Container>
      <Header />
      <Nav>
        <Crumb page="Portfólio" project="Brastemp" link="portfolio" />
      </Nav>
      <Title>Brastemp</Title>
      <Subtitile>Descrição do projeto</Subtitile>
      <Text>
        <p>
          Aplicativo desenvolvido para o lançamento das novas geladeiras
          Brastemp Inverse.
        </p>
        <p>
          Específico para o dispositivo iPAD. Desenvolvido em parceria com uma
          agência, o aplicativo conta com interatividade utilizando recursos de
          realidade aumentada, microfone e webcam.
        </p>
      </Text>
      <img src={Brastemp1} alt="oi" />
      <Text>
        <p>
          Desenvolvi todo o fluxo da aplicação com animações dos objetos UI e
          transições entre as telas.
        </p>
        <p>
          Tecnologias e bibliotecas utilizadas: Starling, StarlingMVC,
          FeathersUI e Stage3D (GPU Accelerated).
        </p>
      </Text>
      <img src={Brastemp2} alt="oi" />
      <img src={Brastemp3} alt="oi" />
      <Link href="#">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default Brastemp;
