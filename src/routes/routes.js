import pages from "../pages";

const routes = [
  {
    path: "/login",
    element: <pages.Login />,
    type: "protected",
  },
  {
    path: "/register",
    element: <pages.Register />,
    type: "protected",
  },
];

export default routes;
