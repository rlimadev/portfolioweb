import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    width: 60%;
    font-size: 4.1rem;
    color: yellowgreen;
    margin: 0.7rem 0 0 0;
  }
  h3 {
    color: yellowgreen;
    text-transform: uppercase;
    font-weight: 300;
    margin: 1rem 0 2rem 0;
    font-size: 1.3rem;
  }
  p {
    font-size: 2.4rem;
    width: 100%;
    margin: 0 0 2.2rem 0;
  }
`;

export const Section = styled.section`
  width: 60%;
`;

export const Nav = styled.nav`
  width: 60%;
  font-size: 1.5rem;
  margin: 0 0 2rem 0;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  border-bottom: 1px solid #eff8e2;
  color: #eff8e2;
  padding: 1.5rem 0;
  margin: 6rem 0 0.5rem 0;
  font-size: 1.7rem;
`;

export const List = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  a {
    color: #ada8b6;
  }
  span {
    display: flex;
    font-size: 2.4rem;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 63%;
  }
`;

export const Link = styled.a`
  width: 60%;
  button {
    background: none;
    border: none;
    color: #ada8b6;
    margin: 2rem 0 10rem;
    font-size: 2.3rem;
    letter-spacing: 0.04rem;
  }
`;
