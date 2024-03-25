import Login from "../pages/Share/Login/Login";
import Register from "../pages/Share/Register/Register";
import Panel from "../pages/Share/Panel/Panel";

import ContainerHome from "../pages/Share/ContainerHome/ContainerHome";
import PublicLayout from "../layouts/PublicLayout";
import Dashboard from "../pages/Share/Dashboard/Dashboard";
import Profile from "../pages/Share/Profile/Profile";
import Shop from "../pages/Share/Shop/Shop";
import Cart from "../pages/Share/Cart/Cart";
import { Navigate } from "react-router-dom";
import Product from "../pages/Share/Product/Product";
import Contact from "../pages/Share/Contact/Contact";
import About from "../pages/Share/About/About";
import Blogs from "../pages/Share/Blogs/Blogs";
import Blog from "../pages/Share/Blog/Blog";
const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <ContainerHome /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "shop", element: <Shop /> },
      {
        path: "product",
        children: [
          { index: true, element: <Navigate to="shop" replace={true} /> },
          { path: ":id", element: <Product /> },
        ],
      },

      {
        path: "panel",
        element: <Panel />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "profile", element: <Profile /> },

          { path: "cart", element: <Cart /> },
        ],
      },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:id", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
    ],
  },
];

export default publicRoutes;
