import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalState } from "../globalStateProvider";
import {
  doc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const CreateChatPopUp = () => {
  const [{ user }, dispatch] = useGlobalState();
  const [reciever, setReciever] = useState("m_javad_96@yahoo.com");

  const createGroup = async () => {
    if (reciever && user.email != reciever) {
      await addDoc(collection(db, "chats"), {
        users: [user.email, reciever],
      });
    }
  };

  const chatAlreadyExists = async (reciever) => {
    const userChatRef = query(
      collection(db, "chats"),
      where("users", "array-contains", user.email)
    );
    const chats = [];
    const querySnapshot = await getDocs(userChatRef);
    querySnapshot?.forEach((doc) => {
      chats.push({ ...doc.data(), id: doc.id });
    });
    const remainChats = chats.map((chat) => chat?.users.includes(reciever));
    console.log(remainChats);
    console.log(reciever);
  };
  chatAlreadyExists(reciever);
  return (
    <Container>
      <PopupWrap>
        <h1>start a chat</h1>
        <SearchBar>
          <Search />
          <input
            type="email"
            placeholder="email ..."
            value={reciever}
            onChange={(e) => setReciever(e.target.value)}
          />
        </SearchBar>
        <ButtonWrap>
          <Button onClick={() => dispatch({ type: "SHOW_POPUP_FALSE" })}>
            Cancel
          </Button>
          <Button apply={true} onClick={createGroup}>
            Apply
          </Button>
        </ButtonWrap>
      </PopupWrap>
    </Container>
  );
};

export default CreateChatPopUp;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const PopupWrap = styled.div`
  width: 30rem;
  background-color: #111;
  height: 20rem;
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  color: #fff;
  > h1 {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;

const SearchBar = styled.div`
  width: 100%;
  border: 0.1rem solid whitesmoke;
  border-radius: 10rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > input {
    width: 80%;
    padding: 0.7rem 1rem;
    background-color: #111;
    color: #eee;
    border: none;
    &:hover,
    &:focus {
      outline: none;
    }
  }
`;
const ButtonWrap = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 2rem;
`;
const Button = styled.button`
  background-color: ${(props) => (props.apply ? "#3ccb25" : "red")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  color: #eee;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    outline: 0.1rem solid whitesmoke;
  }
`;
