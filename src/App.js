import { useRoutes, useLocation } from "react-router-dom";
import routes from "./navigation/routes";
import useNavigation from "./hooks/useNavigation";
import "./app.css";

const App = () => {
  const element = useRoutes(routes);
  const { pathname } = useLocation();
  const { navigate } = useNavigation();
  return (
    <div className="app">
      <h1>Welcome to React Router!</h1>
      <p>
        Navigate from an array of routes, and redirects to the next one if the
        current page should be hidden. If you want to show/hide a page, you can
        change it on helpers/index file
      </p>
      <p>As default it will bypass Family page</p>
      <div className="nav">
        {routes.map((route, index) => (
          <button
            key={`route-${index}`}
            className={`link ${pathname === route.path && "active"}`}
            onClick={() => navigate(route.path)}
          >
            {route.name}
          </button>
        ))}
      </div>
      <div className="section">{element}</div>
    </div>
  );
};

export default App;
