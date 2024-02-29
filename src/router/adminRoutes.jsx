import CategoriesAdmin from "../components/Admin/CategoriesAdmin/CategoriesAdmin";
import ProductsAdmin from "../components/Admin/ProductsAdmin/ProductsAdmin";
import UsersAdmin from "../components/Admin/UsersAdmin/UsersAdmin";
import WelcomeAdmin from "../components/Admin/WelcomeAdmin/WelcomeAdmin";
import AdminPanel from "../pages/Admin/AdminPanel/AdminPanel";
const adminRoutes = [
  {
    path: "/admin",
    element: <AdminPanel />,
    children: [
      { index: true, element: <WelcomeAdmin end /> },
      { path: "Products", element: <ProductsAdmin /> },
      { path: "categories", element: <CategoriesAdmin /> },
      { path: "users", element: <UsersAdmin /> },
    ],
  },
];

export default adminRoutes;
