import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  width: 60%;
`;

export const Title = styled.div`
  color: yellowgreen;
  width: 90%;
  font-size: 4.1rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  width: 100%;
  font-size: 1.5rem;
  margin: 0 0 2.7rem 0;
`;

export const List = styled.ul`
  background-repeat: no-repeat;
  width: 87%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 320px 320px 320px;
  grid-gap: 2rem;
  margin: 3rem 0 8rem 0;
`;

export const Content = styled.div`
  z-index: 99999;
  border-radius: 10px;
  width: 100%;
  height: 500px;
`;

export const ListItem = styled.li`
  cursor: pointer;
  width: 100%;
  height: 320px;
  background-size: cover;
  div {
    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: 1;
    }
  }
  h2 {
    color: yellowgreen;
    font-size: fit-content;
    text-transform: uppercase;
    opacity: 1;
  }
  span {
    text-transform: uppercase;
    font-size: fit-content;
    font-weight: bold;
  }
`;
