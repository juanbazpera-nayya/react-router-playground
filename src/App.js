import { useRoutes, Link } from "react-router-dom";
import routes from "./navigation/routes";
import "./app.css";

const App = () => {
  const element = useRoutes(routes);
  return (
    <div className="app">
      <h1>Welcome to React Router!</h1>
      <div className="nav">
        {routes.map((route, index) => (
          <Link key={`route-${index}`} to={route.path}>
            {route.name}
          </Link>
        ))}
      </div>
      <div className="section">{element}</div>
    </div>
  );
};

export default App;
