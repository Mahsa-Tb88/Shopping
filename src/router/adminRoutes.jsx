import Home from "../pages/Share/Home/Home";
const adminRoutes = [
  {
    path: "/admin",
    element: <Home />,

    children: [{ index: true, element: <Home /> }],
  },
];

export default adminRoutes;
