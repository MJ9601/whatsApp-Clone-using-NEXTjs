import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useGlobalState } from "../globalStateProvider";
import ChatRoomHeader from "./ChatRoomHeader";
import Message from "./Message";
import MsgSender from "./MsgSender";

const ChatRoom = () => {
  const [{ currentGroup }, dispatch] = useGlobalState();
  const router = useRouter();
  const _msgRef = doc(db, "chats", router.query.id);
  const queryMsgs = query(
    collection(_msgRef, "messages"),
    orderBy("timestamp", "asc")
  );
  const [messages, setMessages] = useState([]);
  const getMsgs = async () => {
    const msgSnapshots = await getDocs(queryMsgs);
    if (msgSnapshots) {
      const msgs = msgSnapshots.docs.map((doc) => ({
        ...doc.data(),
        timestamp: doc.data()?.timestamp?.toDate().getTime(),
      }));
      setMessages(msgs);
    }
  };
  getMsgs();

  return (
    <Container>
      <>
        <ChatRoomHeader />
        <MessageWrapper>
          <Message />
          {messages.map((msg) => (
            <Message key={msg.id} messageInfo={msg} />
          ))}
          <EndTag />
        </MessageWrapper>
        <MsgSender />
      </>
    </Container>
  );
};

export default ChatRoom;

const Container = styled.div`
  width: 80%;
  position: relative;
`;
const MessageWrapper = styled.div`
  background-color: rgb(172, 146, 112);
  height: calc(100vh - 7rem);
  overflow-y: auto;
  padding: 2rem;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  > img {
    width: 50%;
    max-width: 30rem;
    object-fit: contain;
  }
`;
const EndTag = styled.div``;
