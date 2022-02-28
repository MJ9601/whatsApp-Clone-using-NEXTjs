import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./login";
import { auth, db } from "../firebase";
import "../styles/globals.css";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { StateProvider, useGlobalState } from "../globalStateProvider";
import { initState, reducer } from "../reducer";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const setUser = async () => {
      if (user) {
        const userDoc = doc(db, "users", user.uid);
        const setDoc_ = await setDoc(
          userDoc,
          {
            email: user.email,
            userImg: user.photoURL,
            lastSeen: serverTimestamp(),
          },
          { merge: true }
        );
      }
    };
    setUser();
  }, [user]);

  if (loading) return <Loading />;
  else if (!user) return <Login />;
  else
    return (
      <StateProvider initState={initState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    );
}

export default MyApp;
