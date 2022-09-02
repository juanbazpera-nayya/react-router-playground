import React from "react";
import SurveyLayout from "../components/SurveyLayout";
import useNavigation from "../hooks/useNavigation";

const Me = () => {
  const { next, back } = useNavigation();

  return (
    <SurveyLayout>
      <p>About me</p>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </SurveyLayout>
  );
};

export default Me;
