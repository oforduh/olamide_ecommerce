import pages from "../pages";

const routes = [
  {
    path: "/",
    element: <pages.HomePage />,
    type: "authenticated",
  },
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
