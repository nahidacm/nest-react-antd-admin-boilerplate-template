import React from "react";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import UserLogin from "./modules/user/components/UserLogin.jsx";
import UserCreate from "./modules/user/components/UserCreate.jsx";
import UserList from "./modules/user/components/UserList.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "user/list",
        element: <UserList />,
      },
      {
        path: "user/create",
        element: <UserCreate />,
      },
    ],
  },
]);

export default router;
