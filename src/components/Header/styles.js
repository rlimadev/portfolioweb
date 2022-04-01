import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ isActive }) => (isActive ? "center" : "flex-end")};
`;

export const List = styled.div`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  ${media.greaterThan("large")`
  width: 70%;
  `}
`;

export const ListItem = styled.div`
  color: #ada8b6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ada8b6;
  padding: 0.5rem 0;
  font-size: x-small;
  span {
    color: yellowgreen;
    padding: 0 0.2rem 0 0;
  }
  svg {
    font-size: small;
  }
  &:last-child {
    border: none;
  }
  ${media.between("medium", "large")`
    padding: 1rem 1.2rem;
    font-size: large;
    svg {
    font-size: x-large;
    }
  `}
  ${media.greaterThan("large")`
    padding: 1.2rem 1.2rem;
    font-size: x-large;
    svg {
    font-size: xx-large;
    }
  `}
`;

export const Button = styled.button`
  display: ${({ isActive }) => (isActive ? "none" : "flex")};
  background: transparent;
  border: none;
  color: #ada8b6;
  padding: 0.2rem 0.5rem;
  svg {
    font-size: 2rem;
  }
  ${media.between("medium", "large")`
    padding: 1rem 1.2rem;
  `}
  ${media.greaterThan("large")`
  padding: 2.5rem 6rem;
  margin: 0 0 2rem 0;
  svg {
    font-size: 6rem;
  }
  `}
`;
