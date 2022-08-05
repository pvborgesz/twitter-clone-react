import React from "react";
import Button from "../Button";

import {
  Container,
  Topside,
  Logo,
  HomeIcon,
  MenuButton,
  BellIcon,
  EmailIcon,
  ProfileIcon,
  Botside,
  ProfileData,
  ExitIcon,
  Avatar,
  FavoriteIcon,
} from "./styles";

const MenuBar: React.FC = () => {
  return (
    <>
      <Container>
        <Topside>
          <Logo />

          <MenuButton>
            <HomeIcon />
            <span>Página Inicial</span>
          </MenuButton>
          <MenuButton>
            <BellIcon />
            <span>Notificações</span>
          </MenuButton>

          <MenuButton>
            <EmailIcon />
            <span>Mensagens</span>
          </MenuButton>

          <MenuButton>
            <FavoriteIcon />
            <span>Favoritados</span>
          </MenuButton>

          <MenuButton className="active">
            <ProfileIcon />
            <span>Perfil</span>
          </MenuButton>

          <Button>
            <span>Tweetar</span>
          </Button>
        </Topside>

        <Botside>
          <Avatar />
          <ProfileData>
            <strong>Paulo Victor Borges</strong>
            <span>@pvborgesz</span>
          </ProfileData>
          <ExitIcon />
        </Botside>
      </Container>
    </>
  );
};

export default MenuBar;
