import { Chat, MoreVert, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { useGlobalState } from "../globalStateProvider";
import GroupCard from "./GroupCard";

const Sidebar = () => {
  const [{ user, Groups }, dispatch] = useGlobalState();

  useEffect(() => {
    const existenceChats = async () => {
      if (user) {
        const userChatRef = query(
          collection(db, "chats"),
          where("users", "array-contains", user?.email)
        );
        const chats = [];
        const querySnapshot = await getDocs(userChatRef);
        querySnapshot?.forEach((doc) => {
          chats.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: "SET_GROUPS", Groups: chats });
      }
    };
    existenceChats();
  }, [user]);
  return (
    <Container>
      <Header>
        <InfoWrap>
          <Avatar
            onClick={() => auth.signOut()}
            src={user?.photoURL}
            sx={{ cursor: "pointer", ":hover": { opacity: "0.8" } }}
          />
          <h5>{user?.email}</h5>
        </InfoWrap>
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
        {Groups.map((group) => (
          <GroupCard key={group.id} data={group?.users} currentGroup={group} />
        ))}
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
  > div {
    display: flex;
  }

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
const InfoWrap = styled.div`
  width: 80%;
  display: flex;
  gap: 1rem;
  align-items: center;
  > h5 {
    font-size: 1.5rem;
    width: 70%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
