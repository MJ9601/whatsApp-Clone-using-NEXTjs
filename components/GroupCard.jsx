import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

const GroupCard = () => {
  return (
    <Container>
      <Avatar sx={{ mr: "1.5rem" }} />
      <div>
        <h2>username</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          veritatis!
        </p>
      </div>
    </Container>
  );
};

export default GroupCard;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 2rem;
  padding-bottom: 0.8rem;
  border-bottom: 0.1rem solid whitesmoke;
  > div {
    > h2,
    p {
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipse;
    }
    > h2 {
      font-weight: 500;
    }
  }
  &:hover {
    border: none;
  }
`;
