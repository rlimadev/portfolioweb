import React from "react";

import Header from "../Header";
import Crumb from "../Crumb";

import { socialMedia } from "./mock";

import {
  Container,
  Nav,
  Title,
  List,
  ListItem,
  SocialMedia,
  Link,
} from "./styles";

const Contact = () => {
  return (
    <Container>
      <Header />
      <Nav>
        <Crumb page="Contacto" />
      </Nav>
      <Title>Contato</Title>
      <List>
        <ListItem>
          <h3>E-MAIL:</h3>
          <p>rlimadev@gmail.com</p>
        </ListItem>
        <ListItem>
          <h3>SKYPE:</h3>
          <p>rlimadev@gmail.com</p>
        </ListItem>
      </List>
      <SocialMedia>
        <h3>REDES SOCIAIS:</h3>
        {socialMedia.map((item) => (
          <a href={item.link} target="_blank" rel="noreferrer">
            <img src={item.image} alt="link para o Facebook" />
          </a>
        ))}
      </SocialMedia>

      <Link href="#">
        <button>Voltar ao início</button>
      </Link>
    </Container>
  );
};

export default Contact;
