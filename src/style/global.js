import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body {
    background-color: #23022E;
    font-family: 'Varela Round', sans-serif;
    color: #ada8b6;
  }

  html {
  scroll-behavior: smooth;
  }
`;
