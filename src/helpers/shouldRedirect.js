import routes from "../navigation/routes";

export const shouldRedirect = {
  "/": (survey) => survey.redirectMe,
  "/family": (survey) => survey.redirectFamily,
  "/financial": (survey) => survey.redirectFinancial,
  "/coverage": (survey) => survey.redirectCoverage,
};

export const getNextPage = (currentPath) => {
  const currentRouteIndex = routes.findIndex(
    (route) => route.path === currentPath
  );
  if (currentRouteIndex === routes.length - 1) return;
  const nextPath = routes[currentRouteIndex + 1].path;

  return nextPath;
};
