import React from "react";

import Crumb from "../Crumb";
import Me from "../../assets/img/me1.jpg";
import { data, about, hability, courses, experience } from "./mock";

import {
  Container,
  Nav,
  Title,
  AboutMe,
  List,
  ListItem,
  Link,
  Section,
} from "./styles";
import Header from "../Header";

const Curriculum = () => {
  return (
    <Container>
      <Header />
      <Nav>
        <Crumb page="Currículo" />
      </Nav>
      <h1>Currículo</h1>
      <Section>
        <Title>Dados Pessoais</Title>
        <AboutMe>
          <List>
            {data.map((item) => (
              <ListItem>
                <h3>{item.name}</h3>
                <p>{item.info}</p>
              </ListItem>
            ))}
            <ListItem>
              <h3>IDIOMAS</h3>
              <p>Potuguês(Nativo)</p>
              <p>Inglês</p>
              <span>Writing: intermediário. Reading: avançado.</span>
              <span>Listening: intermediário. Talking: intermediário.</span>
            </ListItem>
          </List>
          <img src={Me} alt="Foto de Rafael Lima" />
        </AboutMe>

        <Title>Sobre Mim</Title>
        <p>{about}</p>

        <Title>Habilidades</Title>
        <List>
          {hability.map((item) => (
            <ListItem>
              <h3>{item.name}</h3>
              <p>{item.info}</p>
            </ListItem>
          ))}
        </List>

        <Title>Ultimos cursos concretizados</Title>
        <List>
          {courses.map((item) => (
            <ListItem>
              <h3>{item.name}</h3>
              <p>{item.info}</p>
            </ListItem>
          ))}
        </List>

        <p>
          Entre outras dezenas de cursos que fiz durante todos esses 9 anos de
          carreira.
        </p>

        <Title>Experiência de Trabalho</Title>
        <List>
          {experience.map((item) => (
            <ListItem>
              <h3>{item.name}</h3>
              <p>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.info}
                </a>
              </p>
            </ListItem>
          ))}
        </List>

        <Title>Contato</Title>
        <p>rlimadev@gmail.com</p>
      </Section>

      <Link href="#">
        <button>Voltar ao início</button>
      </Link>
    </Container>
  );
};

export default Curriculum;
