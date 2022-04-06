import styled from "styled-components";

export const Container = styled.div`
  //background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  color: yellowgreen;
  width: 90%;
  font-size: 7.4rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  width: 90%;
`;

export const List = styled.ul`
  background-repeat: no-repeat;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4.5rem;
  margin: 2rem 0 8rem 0;
`;

export const Content = styled.div`
  z-index: 99999;
  //
  //background-opacity: .5;
  border-radius: 10px;
  width: 100%;
  height: 500px;
`;

export const ListItem = styled.li`
  cursor: pointer;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  background-size: cover;
  div {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    color: yellowgreen;
    font-size: 2.3rem;
    text-transform: uppercase;
    opacity: 1;
  }
  span{
    text-transform: uppercase;
    font-size: x-large;
    font-weight: bold;
  }
`;
