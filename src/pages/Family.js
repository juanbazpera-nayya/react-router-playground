import React from "react";
import useNavigation from "../hooks/useNavigation";

const Family = () => {
  const { next, back } = useNavigation();

  return (
    <div>
      <p>Family</p>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Family;
