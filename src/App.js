import { useRoutes, Link } from "react-router-dom";
import routes from "./navigation/routes";
import "./app.css";

const App = () => {
  const element = useRoutes(routes);
  return (
    <div className="app">
      <h1>Welcome to React Router!</h1>
      <p>
        Navigate from an array of routes, and redirects to the next one if the
        current page should be hidden. If you want to show/hide a page, you can
        change it on component/SurveyLayout file
      </p>
      <p>As default it will bypass Family and Financial pages</p>
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
