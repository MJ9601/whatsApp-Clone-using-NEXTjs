import React from "react";
import styled from "styled-components";
import ChatRoomHeader from "./ChatRoomHeader";
import Message from "./Message";
import MsgSender from "./MsgSender";

const ChatRoom = () => {
  return (
    <Container>
      <ChatRoomHeader />
      <MessageWrapper>
        <Message />
      </MessageWrapper>
      <MsgSender />
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
