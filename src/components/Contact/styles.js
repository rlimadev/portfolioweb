import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: yellowgreen;
    font-size: 1.5rem;
    font-weight: 300;
    margin: 2.5rem 0;
  }
`;

export const Nav = styled.nav`
  width: 60%;
  font-size: 1.5rem;
  margin: 0 0 13rem 0;
`;

export const Title = styled.h1`
  width: 60%;
  font-size: 4.1rem;
  color: yellowgreen;
`;

export const List = styled.ul`
  width: 60%;
  margin: 2rem 0;
`;

export const ListItem = styled.li`
  p {
    font-size: 2.3rem;
  }
`;

export const SocialMedia = styled.div`
  width: 60%;
  img {
    width: 3.2rem;
    margin: 0 0.6rem 0 0;
  }
`;

export const Link = styled.a`
  width: 60%;
  margin: 2rem 0 0 0;
  button {
    background: none;
    border: none;
    color: #ada8b6;
    margin: 2rem 0 10rem;
    font-size: 2.3rem;
    letter-spacing: 0.04rem;
  }
`;
