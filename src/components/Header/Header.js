import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { Container, List, ListItem, Button } from "./styles";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);
  return (
    <Container isActive={isActive}>
      <Button isActive={isActive}
        onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
      >
        <MenuIcon />
      </Button>
      <List isActive={isActive}>
        <ListItem><span>&#62;</span> Home</ListItem>
        <ListItem>Portfolio</ListItem>
        <ListItem>Curriculo</ListItem>
        <ListItem>Contato</ListItem>
        <ListItem onClick={() => setIsActive(false)}><CloseIcon /></ListItem>
      </List>
    </Container>
  );
};

export default Header;
