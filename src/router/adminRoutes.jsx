import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Share/Home/Home";

const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default adminRoutes;
