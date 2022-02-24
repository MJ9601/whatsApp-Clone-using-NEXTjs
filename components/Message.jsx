import React, { useState } from "react";
import styled from "styled-components";

const Message = () => {
  const [isUser, setIsUser] = useState(true);
  return (
    <Container isUser={isUser}>
      <h3>username</h3>
      <h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
        error!
      </h2>
      <p>date</p>
    </Container>
  );
};

export default Message;

const Container = styled.div`
  width: fit-content;
  min-width: 30rem;
  background-color: ${(props) => (props.isUser ? "rgb(0, 204, 10)" : "#fff")};
  padding: 0.7rem 1rem;
  border-radius: 0.8rem;
  position: relative;
  margin-left: ${(props) => props.isUser && "auto"};
  > h3 {
    position: absolute;
    top: -35%;
    font-weight: 500;
  }
  > h2 {
    font-weight: 500;
  }
  > p {
    width: 100%;
    text-align: end;
  }
`;
