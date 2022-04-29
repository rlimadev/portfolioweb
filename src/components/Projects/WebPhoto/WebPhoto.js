import React from "react";

import Header from "../../Header";
import Crumb from "../../Crumb";
import PhotoWork from "../../../assets/img/nicefoto1.jpg";
import PhotoWorking from "../../../assets/img/nicefoto2.jpg";

import {
  Container,
  Title,
  Subtitile,
  Nav,
  Text,
  Link,
  Iframe,
} from "../stylesProject";

const WebPhoto = () => {
  return (
    <Container>
      <Header />
      <Nav>
        <Crumb
          page="Portfólio"
          project="Nicefotos Photolivros"
          link="portfolio"
        />
      </Nav>
      <Title>Nicephotos Foto livro</Title>
      <Subtitile>Descrição do projeto</Subtitile>
      <Text>
        <p>
          O aplicativo web foto livro é uma forma original de guardar boas
          lembranças num álbum de fotos temático e personalizado. Você pode
          montá-lo em vários tamanhos, utilizando capas coloridas, páginas
          customizadas, legendas, adesivos em suas fotos e o que mais sua
          imaginação criar!{" "}
        </p>
        <p> Assista o vídeo!</p>
      </Text>
      <Iframe
        title="video"
        class="video"
        width="100%"
        height="720"
        src="https://www.youtube-nocookie.com/embed/59cETmx687E?rel=0&amp;controls=0&amp;showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></Iframe>
      <Text>
        <p>
          {" "}
          Rica aplicação web que facilitou a vida da maior empresa de revelação
          de fotos online do país na confecção de fotolivros personalizados pelo
          próprio cliente do site. Fui responsável pela adição de novas features
          e correção de centenas de bugs no frontend.
        </p>
      </Text>
      <img src={PhotoWork} alt="PhotoWork" />
      <Text>
        <p>
          {" "}
          Tecnologias utilizadas: Adobe FLEX SDK no frontend e .NET framework no
          backend.{" "}
        </p>
      </Text>
      <img src={PhotoWorking} alt="PhotoWorking" />
      <Link href="#">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default WebPhoto;
