import React from "react";
import useNavigation from "../hooks/useNavigation";

const Coverage = () => {
  const { next, back } = useNavigation();
  return (
    <div>
      <p>Coverage</p>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Coverage;
