import { AttachFile, MoreVert } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ChatRoomHeader = () => {
  return (
    <Container>
      <div>
        <Avatar />
        <div>
          <h2>username</h2>
          <p>
            last seen: <span>today</span>
          </p>
        </div>
      </div>
      <div>
        <AttachFile
          sx={{
            mr: "1.3rem",
            fontSize: "2rem",
            color: "#777",
            cursor: "pointer",
          }}
        />
        <MoreVert
          sx={{
            mr: "1.3rem",
            fontSize: "2rem",
            color: "#777",
            cursor: "pointer",
          }}
        />
      </div>
    </Container>
  );
};

export default ChatRoomHeader;

const Container = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    > div {
      margin-left: 2rem;
      > p {
        color: #666;
      }
      > h2 {
        font-weight: 500;
      }
    }
  }
`;
