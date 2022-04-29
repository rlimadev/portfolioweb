import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  Container,
  List,
  ListItem,
  Button,
  MenuList,
  MenuListItem,
} from "./styles";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  return (
    <Container isActive={isActive}>
      <Button
        isActive={isActive}
        onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
      >
        <MenuIcon />
      </Button>
      <List isActive={isActive}>
        <ListItem onClick={() => navigate("/")}>
          <span>&#62;</span> Home
        </ListItem>
        <ListItem onClick={() => navigate("/portfolio")}>Portfolio</ListItem>
        <ListItem onClick={() => navigate("/curriculum")}>Curriculo</ListItem>
        <ListItem onClick={() => navigate("/contact")}>Contato</ListItem>
        <ListItem onClick={() => setIsActive(false)}>
          <CloseIcon />
        </ListItem>
      </List>
      <MenuList>
        <MenuListItem onClick={() => navigate("/")}>
          <span>&#62;</span> Home
        </MenuListItem>
        <MenuListItem onClick={() => navigate("/portfolio")}>
          Portfolio
        </MenuListItem>
        <MenuListItem onClick={() => navigate("/curriculum")}>
          Curriculo
        </MenuListItem>
        <MenuListItem onClick={() => navigate("/contact")}>
          Contato
        </MenuListItem>
      </MenuList>
    </Container>
  );
};

export default Header;
