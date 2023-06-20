import React from "react";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element: Component, ...props }) => {
  return props.isloggedIn ? (
		<Component {...props} />
	) : (
		<Navigate to="/sign-in" />
	);
};

