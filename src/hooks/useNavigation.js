import { useLocation, useNavigate } from "react-router-dom";
import { getNextPage } from "../helpers/shouldRedirect";

const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const next = () => {
    const nextPath = getNextPage(location.pathname);
    if (!nextPath) return;
    navigate(nextPath);
  };

  const back = () => {
    navigate(-1);
  };

  return { next, back };
};

export default useNavigation;
