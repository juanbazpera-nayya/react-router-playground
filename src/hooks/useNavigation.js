import { useLocation, useNavigate } from "react-router-dom";
import { getNextPath, getPreviousPath } from "../helpers";

const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const next = () => {
    const nextPath = getNextPath(location.pathname);
    if (!nextPath) return;
    navigate(nextPath);
  };

  const back = () => {
    const previousPath = getPreviousPath(location.pathname);
    if (!previousPath) return;
    navigate(previousPath);
  };

  return { next, back };
};

export default useNavigation;
