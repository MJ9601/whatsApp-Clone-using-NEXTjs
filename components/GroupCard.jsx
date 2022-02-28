import { Avatar } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useGlobalState } from "../globalStateProvider";
import { useRouter } from "next/router";

const GroupCard = ({ data, currentGroup }) => {
  const router = useRouter();
  const [{ user }, dispatch] = useGlobalState();
  const recipient = data.filter((userMail) => userMail !== user.email)[0];
  const [recipientInfo, setRecipientInfo] = useState(null);

  useEffect(() => {
    const getRecipientInfo = async () => {
      if (user) {
        const _query = query(
          collection(db, "users"),
          where("email", "==", recipient)
        );
        const querySnapshot = await getDocs(_query);
        querySnapshot?.forEach((doc) =>
          setRecipientInfo({ id: doc?.id, ...doc?.data() })
        );
      }
    };
    getRecipientInfo();
  }, [user]);
  return (
    <Container
      onClick={() => {
        dispatch({
          type: "SET_GROUP",
          currentGroup: currentGroup,
          currentRecipient: recipientInfo,
        });
        router.push(`/chat/${currentGroup?.id}`);
      }}
    >
      <Avatar sx={{ mr: "1.5rem" }} src={recipientInfo?.userImg}>
        {recipient[0]}
      </Avatar>
      <div>
        <h2>{recipient}</h2>
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
  padding: 1rem 2rem;
  padding-bottom: 0.8rem;
  border-bottom: 0.1rem solid whitesmoke;
  transition: background-color 0.3s ease-in-out;
  border-radius: 0.5rem;
  > div {
    > h2,
    p {
      width: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > h2 {
      font-weight: 500;
    }
  }
  &:hover {
    border: none;
    background-color: whitesmoke;
  }
`;
