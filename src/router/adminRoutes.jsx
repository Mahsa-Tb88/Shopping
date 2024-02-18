import AdminPanel from "../pages/Admin/AdminPanel/AdminPanel";
import Home from "../pages/Share/Home/Home";
const adminRoutes = [
  {
    path: "/admin",
    children: [{ index: true, element: <AdminPanel /> }],
  },
];

export default adminRoutes;
