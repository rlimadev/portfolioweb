import React from "react";
import Header from "../../components/Header";
import Me from "../../assets/img/me.jpg";
import { Container, Section, Title, Span } from "./styles";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Section>
        <img src={Me} alt="Profile" />
        <div>
          <Title>
            Rafael<span> Lima da Rocha</span>
          </Title>
          <Span>
            Fullstack Developer - Sênior Web, Mobile e Desktop Game Developer
          </Span>
        </div>
      </Section>
    </Container>
  );
};

export default HomePage;
