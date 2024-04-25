import React from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "./authService";

// This component is used to protect routes that should only be accessible to authenticated users
export const ProtectedRouteAuth = ({ element: Component, path }) => {
  // If the user is authenticated, render the component. Else, navigate to the path specified
  if (isAuth()) {
    return <Component />;
  } else {
    return <Navigate to={path} />;
  }
};

// This is the reverse of the previous component - only accessible to not-authenticated users
export const ProtectedRouteNotAuth = ({ element: Component, path }) => {
  // If the user is not authenticated, render the component. Else, navigate to the path specified
  if (!isAuth()) {
    return Component;
  } else {
    return <Navigate to={path} />;
  }
};