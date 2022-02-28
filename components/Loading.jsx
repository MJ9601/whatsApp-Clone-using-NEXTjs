import { Circle } from "better-react-spinkit";
import React from "react";

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Circle color="#3ccb25" size={100} />
    </center>
  );
};

export default Loading;
