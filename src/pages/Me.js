import React from "react";
import useNavigation from "../hooks/useNavigation";

const Me = () => {
  const { next, back } = useNavigation();

  return (
    <div>
      <p>About me</p>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Me;
