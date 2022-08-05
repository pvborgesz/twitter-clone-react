import React from "react";

import ProfilePage from "../ProfilePage";
import { Avatar } from "../ProfilePage/styles";

import {
  BellIcon,
  BackIcon,
  BottomMenu,
  Container,
  Header,
  ProfileInfo,
  SearchIcon,
  HomeIcon,
  EmailIcon,
} from "./styles";
// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <button>
            <BackIcon />
          </button>
          <ProfileInfo>
            <strong>Paulo Victor Borges</strong>
            <span>205 Tweets</span>
          </ProfileInfo>
        </Header>
        <ProfilePage />
        <BottomMenu>
          <HomeIcon className="active" />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </BottomMenu>
      </Container>
    </>
  );
};

export default Main;
