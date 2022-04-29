import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Btn } from "./styles";

const Crumb = ({ page, project, link }) => {
  const navigate = useNavigate();

  return (
    <Container>
      Home &#62;{" "}
      {project === undefined ? (
        page
      ) : (
        <Btn onClick={() => navigate(`/${link}`)}>{page}</Btn>
      )}
      {project !== undefined && `> ${project}`}
    </Container>
  );
};

export default Crumb;
