import Login from "../pages/Share/Login/Login";
import Register from "../pages/Share/Register/Register";
import Panel from "../pages/Share/Panel/Panel";

import ContainerHome from "../pages/Share/ContainerHome/ContainerHome";
import PublicLayout from "../layouts/PublicLayout";
import Dashboard from "../pages/Share/Dashboard/Dashboard";
import Profile from "../pages/Share/Profile/Profile";
import Balence from "../pages/Share/Profile/Balance/Balance";
import Shop from "../pages/Share/Shop/Shop";
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
        path: "panel",
        element: <Panel />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "profile", element: <Profile /> },
          { path: "balance", element: <Balence /> },
        ],
      },
    ],
  },
];

export default publicRoutes;
