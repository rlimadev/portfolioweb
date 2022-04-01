import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  //width: 100%;
`;

export const Section = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
    width: 42%;
  }
  ${media.between("medium", "large")`
    img {
      width: 35%;
    }
  `}
  ${media.greaterThan("large")`
    img {
      padding: 0 0 1rem 0;
      width: 35%;
    }
  `}
`;

export const Title = styled.h1`
  width: 100%;
  font-size: xx-large;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.2rem 0 0 0;
  color: yellowgreen;
  font-family: "Dancing Script", cursive;
  span {
    color: #ada8b6;
    font-size: large;
    font-weight: 700;
  }
  ${media.between("medium", "large")`
  font-size: 4rem;
  margin: 1.4rem 0 1rem 0;
  span {
    color: #ada8b6;
    font-size: 2rem;
    font-weight: 700;
  }
  `}
  ${media.greaterThan("968px")`
    display: none;
  `}
`;

export const Span = styled.span`
  font-size: .5rem;

  ${media.greaterThan("medium")`
    display: none;
  `}
`
