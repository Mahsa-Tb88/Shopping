import Login from "../pages/Share/Login/Login";
import Register from "../pages/Share/Register/Register";
import Panel from "../pages/Share/Panel/Panel";

import ContainerHome from "../pages/Share/ContainerHome/ContainerHome";
import Home from "../pages/Share/Home/Home";
const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [{ index: true, element: <ContainerHome /> }],
  },
];

export default publicRoutes;
// { path: "login", element: <Login /> },
// { path: "register", element: <Register /> },
// { path: "panel", element: <Panel /> },
