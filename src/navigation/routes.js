import Me from "../pages/Me";
import Family from "../pages/Family";
import Financial from "../pages/Financial";
import Coverage from "../pages/Coverage";

export const Routes = [
  {
    path: "/",
    name: "About Me",
    element: <Me />,
  },
  { path: "/family", name: "About Family", element: <Family /> },
  { path: "/financial", name: "About Financial", element: <Financial /> },
  { path: "/coverage", name: "About Coverage", element: <Coverage /> },
];

export default Routes;
