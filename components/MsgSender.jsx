import { InsertEmoticon, Person } from "@mui/icons-material";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useGlobalState } from "../globalStateProvider";

const MsgSender = () => {
  const [msg, setMsg] = useState("");
  const [{user}] = useGlobalState()
  const router = useRouter()
  const sendMsg = async (e) => {
    e.preventDefault();
    if (msg){
      const _docRef = doc(db, 'chats', router.query.id);
      const _collectionRef = collection(_docRef, 'messages')
      const newMsg = await setDoc(_collectionRef, {
        message: msg,
        sender: user.email,
        timestamp: Timestamp()
      })
    }
  };
  return (
    <Container>
      <InsertEmoticon />
      <SenderBox>
        <input
          type="text"
          as="input"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <input type="submit" style={{ display: "none" }} onClick={sendMsg} />
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
  > input {
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
