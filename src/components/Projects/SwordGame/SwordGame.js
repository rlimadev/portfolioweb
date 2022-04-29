import React from "react";

import Header from "../../Header";
import Crumb from "../../Crumb";
import Sword1 from "../../../assets/img/swor1.jpg";
import Sword2 from "../../../assets/img/swor2.jpg";

import {
  Container,
  Title,
  Subtitile,
  Nav,
  Text,
  Link,
  Iframe,
} from "../stylesProject";

const SwordGame = () => {
  return (
    <Container>
      <Header />
      <Nav>
        <Crumb page="Portfólio" project="Sword of Unknow" link="portfolio" />
      </Nav>
      <Title>Sword of Unknow</Title>
      <Subtitile>Descrição do projeto</Subtitile>
      <Text>
        <p>
          Esse é um projeto pessoal no qual eu tenho muito orgulho de ter
          programado, apesar de não ter terminado. Sempre foi o meu sonho
          programar um jogo de plataforma do zero sem fazer o uso de ferramentas
          como Constructor, GameMaker ou Unity2D. Toda a engine do projeto está
          80% pronta. Só ficou faltando programar a inteligência artificial para
          chefes de fase.
        </p>
      </Text>
      <Iframe
        title="swordgame"
        width="100%"
        height="760"
        src="https://www.youtube-nocookie.com/embed/OlI4c7BIUIg?rel=0&amp;controls=0&amp;showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></Iframe>
      <Text>
        <p>
          Foi desenvolvido para por em prática minhas habilidades como
          programador de jogos. <br />
          Nesse projeto utilizei técnicas avançadas de desenvolvimento como
          Bitmask AABB para colisão, <br />
          Steering Behaviors para inteligência artificial do inimigos, Parallax
          otimizado, TiledBased com multiplas camadas e muita física.
        </p>
      </Text>
      <img src={Sword1} alt="Sword1" />
      <Text>
        <p>
          {" "}
          As tecnologias empregadas no projeto foram Adobe AIR SDK, Starling
          Framework (GPU), a engine de fisica Nape e a linguagem de programação
          orientada a objetos Actionscript 3.0.{" "}
        </p>
      </Text>
      <img src={Sword2} alt="Sword2" />
      <Link href="#">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default SwordGame;
