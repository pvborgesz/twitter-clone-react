import React from "react";

import Feed from "../Feed";

import {
  Container,
  Banner,
  Avatar,
  EditButton,
  LocalizationIcon,
  CakeIcon,
  Followage,
  ProfileData,
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <>
      <Container>
        <Banner>
          <Avatar />
        </Banner>

        <ProfileData>
          <EditButton outlined>Editar Perfil</EditButton>
          <h1>Paulo Victor Borges</h1>
          <h2>@pvborgesz</h2>

          <p>
            Fullstack Developer 🧑🏻‍💻. See my job in{" "}
            <a href="https://github.com/pvborgesz">Github</a> or <br />
            <a href="https://www.linkedin.com/in/paulo-victor-borges-75102121a/">
              Linkedin
            </a>
            <br />
            Projeto desenvolvido para prática de Styled Components e React-TS.
          </p>

          <ul>
            <li>
              <LocalizationIcon />
              São Luís, Brasil.
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em XX de novembro de 2XXX.
            </li>
          </ul>

          <Followage>
            <span>
              Seguindo
              <strong> 672</strong>
            </span>
            <span>
              <strong> 1843 </strong> seguidores.
            </span>
          </Followage>
        </ProfileData>

        <Feed></Feed>
      </Container>
    </>
  );
};

export default ProfilePage;
