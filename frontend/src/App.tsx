
import { Navigate } from "react-router-dom";
import checkAuth from './app/auth.js'
import ProtectedLayout from "./layouts/ProtectedLayout";
import React from "react";

const App = () => {
  // Check for login and initialize axios
  const token = checkAuth();

  return token ? <ProtectedLayout /> : <Navigate to="/login" replace={true} />;
};
export default App;