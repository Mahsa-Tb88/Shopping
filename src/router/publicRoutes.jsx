import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Login from "../pages/Share/Login/Login";
import Home from "../pages/Share/Home/Home";

const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
    ],
  },
];

export default publicRoutes;
