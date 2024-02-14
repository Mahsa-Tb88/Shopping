import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import PublicLayout from "../layouts/PublicLayout";

const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default publicRoutes;
