import React from "react";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import UserLogin from "./modules/user/components/UserLogin";
import UserCreate from "./modules/user/components/UserCreate";
import UserList from "./modules/user/components/UserList";

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
