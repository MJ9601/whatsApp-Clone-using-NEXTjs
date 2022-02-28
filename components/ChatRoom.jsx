import React from "react";
import styled from "styled-components";
import { useGlobalState } from "../globalStateProvider";
import ChatRoomHeader from "./ChatRoomHeader";
import Message from "./Message";
import MsgSender from "./MsgSender";

const ChatRoom = () => {
  const [{ currentGroup }, dispatch] = useGlobalState();
  return (
    <Container>
      <>
        <ChatRoomHeader />
        <MessageWrapper>
          <Message />
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
