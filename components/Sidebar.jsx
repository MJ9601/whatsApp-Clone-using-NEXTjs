import { Chat, MoreVert, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { useGlobalState } from "../globalStateProvider";
import GroupCard from "./GroupCard";

const Sidebar = () => {
  const [{}, dispatch] = useGlobalState();
  return (
    <Container>
      <Header>
        <Avatar_ onClick={() => auth.signOut()} />
        <div>
          <Chat
            sx={{
              fontSize: "2rem",
              color: "rgba(0,0,0,.6)",
              cursor: "pointer",
              mr: "1.9rem",
              transition: "all .3s ease",
              ":hover": { color: "#000" },
            }}
          />
          <MoreVert
            sx={{
              fontSize: "2rem",
              color: "rgba(0,0,0,.6)",
              cursor: "pointer",
              mr: ".9rem",
              transition: "all .3s ease",
              ":hover": { color: "#000" },
            }}
          />
        </div>
      </Header>
      <SearchBar>
        <Search />
        <input type="text" placeholder="Search ..." />
      </SearchBar>
      <H1 onClick={() => dispatch({ type: "SHOW_POPUP_TRUE" })}>
        Start New Chat
      </H1>
      <GroupCardWrap>
        <GroupCard />
      </GroupCardWrap>
    </Container>
  );
};

export default Sidebar;
const Container = styled.div`
  max-width: 60rem;
  min-width: 30rem;
  width: 20%;
  height: 100%;
  padding: 2rem 1rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1rem;
    left: 0;
    background-color: whitesmoke;
    bottom: -15%;
  }
`;

const Avatar_ = styled(Avatar)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const SearchBar = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid whitesmoke;
  border-radius: 10rem;
  > input {
    width: 90%;
    border: none;
    padding: 1rem;
    &:hover,
    &:focus {
      outline: none;
    }
  }
`;
const H1 = styled.h1`
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: green;
  }
`;
const GroupCardWrap = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;
