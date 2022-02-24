import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const CreateChatPopUp = () => {
  return (
    <Container>
      <PopupWrap>
        <h1>start a chat</h1>
        <SearchBar>
          <Search />
          <input type="text" placeholder="Search .." />
        </SearchBar>
        <ButtonWrap>
          <Button>Cancel</Button>
          <Button>Apply</Button>
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
  height: 30rem;
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
const ButtonWrap = styled.div``;
const Button = styled.button``;
