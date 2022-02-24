import { Person } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const MsgSender = () => {
  return (
    <Container>
      <Person />
      <SenderBox>
        <textarea type="text" as="input" />
        <input type="submit" style={{ display: "none" }} />
      </SenderBox>
    </Container>
  );
};

export default MsgSender;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  background-color: #fff;
`;
const SenderBox = styled.form`
  width: 88%;
  > textarea {
    width: 100%;
    border: none;
    background-color: #eee;
    margin: 0.5rem 0;
    border-radius: 3rem;
    padding: 0.3rem 1.5rem;
    font-size: 1.6rem;
    height: 3rem;
    &:focus,
    &:hover {
      outline: none;
      border: none;
    }
  }
`;
