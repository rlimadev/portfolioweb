import React from "react";
import { useNavigate } from "react-router-dom";

import Crumb from "../Crumb/Crumb";
import Header from "../Header";
import { projects } from "./mock";

import {
  Container,
  Section,
  List,
  ListItem,
  Title,
  Nav,
  Content,
} from "./styles";

const Portfolio = ({ id = "Portfólio" }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Section>
        <Nav>
          <Crumb page={id} />
        </Nav>
        <Title>Portfólio</Title>
        <List>
          {projects.map((item, key) => (
            <Content onClick={() => navigate(`${item.url}`)}>
              <ListItem
                key={item.name}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div>
                  <h2>{item.title}</h2>
                  <span>{item.subtitle}</span>
                </div>
              </ListItem>
            </Content>
          ))}
        </List>
      </Section>
    </Container>
  );
};

export default Portfolio;
