import routes from "../navigation/routes";

// This object receives a path and returns if that path should be bypassing
const shouldRedirect = {
  "/": (survey) => survey.redirectMe,
  "/family": (survey) => survey.redirectFamily,
  "/financial": (survey) => survey.redirectFinancial,
  "/coverage": (survey) => survey.redirectCoverage,
};

// TODO: Mock here that page do you want to bypass
// As default it should navigate from Me to Financial bypassing Family
const mockedSurvey = () => ({
  redirectMe: false,
  redirectFamily: true,
  redirectFinancial: false,
  redirectCoverage: false,
});

const getNotRedirectPath = (routes) => {
  let nextPath = undefined;
  routes.some((route) => {
    nextPath = route.path;
    return !shouldRedirect[route.path](mockedSurvey());
  });

  return nextPath;
};

// Get the next path bypassing routes that are not supposed to show on mockedSurvey
export const getNextPath = (currentPath) => {
  const currentRouteIndex = routes.findIndex(
    (route) => route.path === currentPath
  );
  const remainingRoutes = routes.slice(currentRouteIndex + 1);
  const nextPath = getNotRedirectPath(remainingRoutes);

  return nextPath;
};

// Get the previous path bypassing routes that are not supposed to show on mockedSurvey
export const getPreviousPath = (currentPath) => {
  const currentRouteIndex = routes.findIndex(
    (route) => route.path === currentPath
  );
  const remainingRoutes = routes.slice(0, currentRouteIndex).reverse();
  const previousPath = getNotRedirectPath(remainingRoutes);
  return previousPath;
};

// Get the next route from the route user want to go bypassing the ones that are not supposed to show on mockedSurvey
export const getNavigationPath = (next) => {
  const nextIndex = routes.findIndex((route) => route.path === next);

  const remainingRoutes = routes.slice(nextIndex);
  const nextPath = getNotRedirectPath(remainingRoutes);
  return nextPath;
};
