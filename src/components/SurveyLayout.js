import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { getNextPage, shouldRedirect } from "../helpers/shouldRedirect";

// TODO: Mock here that page do you want to bypass
// As default it should navigate from Me to Coverage bypassing Financial and Coverage
const mockedSurvey = {
  redirectMe: false,
  redirectFamily: true,
  redirectFinancial: true,
  redirectCoverage: false,
};

const SurveyLayout = ({ children }) => {
  const location = useLocation();

  // Should redirect?
  if (shouldRedirect[location.pathname](mockedSurvey)) {
    const nextPath = getNextPage(location.pathname);
    if (!nextPath) return;
    return <Navigate to={nextPath} replace />;
  }

  return <>{children}</>;
};

export default SurveyLayout;
