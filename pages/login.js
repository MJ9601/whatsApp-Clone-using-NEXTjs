import styled from "styled-components";
import Head from "next/head";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const login = () => {
  const signIn = async () => {
    const newUser = await signInWithPopup(auth, provider);
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <SignInCard>
          <img
            src="https://france-openheartslangua.netdna-ssl.com/wp-content/uploads/2020/10/WhatsApp-Logo.png"
            alt=""
          />
          <button onClick={signIn}>Login with google account</button>
        </SignInCard>
      </Container>
    </>
  );
};

export default login;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const SignInCard = styled.div`
  width: 30rem;
  height: 40rem;
  padding: 3rem;
  background-color: whitesmoke;
  border-radius: 0.8rem;
  box-shadow: 0.1rem 0.2rem 1rem 0.4rem rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  > img {
    width: 100%;
    fit-object: cover;
  }
  > button {
    border: none;
    background-color: transparent;
    font-size: 1.7rem;
    cursor: pointer;
    padding: 0.3rem 0.9rem;
    border-radius: 0.4rem;
    transition: all 0.3s ease-in-out;
    font-weight: 500;
    outline: 0.1rem solid rgba(0, 0, 0, 0.4);
    &:hover {
      background-color: #35b524;
      color: whitesmoke;
      outline: none;
    }
  }
`;
