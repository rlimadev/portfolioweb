import React from "react";
import { Container, List, ListItem, Title, Nav, Content } from "./styles";

import Header from "../Header";
import { projects } from "./mock";
import Crumb from "../Crumb/Crumb";

const Portfolio = ({ id = "Portfólio" }) => {
  return (
    <>
      <Header />

      <Container>
        <Nav>
          <Crumb page={id} />
        </Nav>
        <Title>Portfólio</Title>
        <List>
          {projects.map((item) => (
            <Content>
              <ListItem
                style={{
                  backgroundImage: ` url(${item.image})`,
                }}
              >
                <div>
                  <h2>{item.title}</h2>
                  <span>{item.subtitle}</span>
                </div>
              </ListItem>
            </Content>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Portfolio;
