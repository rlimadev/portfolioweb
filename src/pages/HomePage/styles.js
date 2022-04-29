import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  margin: 9rem 0;
  display: flex;
  width: 63%;
  img {
    border-radius: 50%;
    width: 57%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 11rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  margin: 4rem 0 0 0;
  color: yellowgreen;
  font-family: "Dancing Script", cursive;
  span {
    color: #ada8b6;
    font-size: 6rem;
    position: relative;
    bottom: 3rem;
  }
`;

export const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  position: relative;
  bottom: 2rem;
`;

export const Aside = styled.div`
  margin: 0 0 0 10rem;
  width: 100%;
`;
