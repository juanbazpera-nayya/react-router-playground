import React from "react";
import useNavigation from "../hooks/useNavigation";

const Financial = () => {
  const { next, back } = useNavigation();

  return (
    <div>
      <p>Financial</p>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Financial;
