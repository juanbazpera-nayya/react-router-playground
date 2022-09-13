import { useLocation, useNavigate } from "react-router-dom";
import { getNextPath, getPreviousPath, getNavigationPath } from "../helpers";

const useNavigation = () => {
  const location = useLocation();
  const routeNavigate = useNavigate();

  const next = () => {
    const nextPath = getNextPath(location.pathname);
    if (!nextPath) return;
    routeNavigate(nextPath);
  };

  const back = () => {
    const previousPath = getPreviousPath(location.pathname);
    if (!previousPath) return;
    routeNavigate(previousPath);
  };

  const navigate = (path) => {
    const nextPath = getNavigationPath(path);
    console.log(path, " - ", nextPath);
    if (!nextPath) return;
    routeNavigate(nextPath);
  };

  return { next, back, navigate };
};

export default useNavigation;
