import React from "react";
import { Routes, Route } from "react-router-dom";

import routes from "./routes";
// import AuthRoute from "./authRoutes";
import ProtectedRoute from "./protectedRoutes";
// import PublicRoute from "./publicRoutes";

const getRouteType = ({ element, type }) => {
  const routeType = {
    // authenticated: <AuthRoute>{element}</AuthRoute>,
    // public: <PublicRoute>{element}</PublicRoute>,
    protected: <ProtectedRoute>{element}</ProtectedRoute>,
  };

  return routeType[type];
};

function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ element, type, path }, idx) => {
        return (
          <Route
            path={path}
            key={idx}
            exact
            element={getRouteType({ element, type })}
          />
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
