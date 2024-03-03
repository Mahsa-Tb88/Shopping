import CategoriesAdmin from "../components/Admin/CategoriesAdmin/CategoriesAdmin";
import ProductsAdmin from "../components/Admin/ProductsAdmin/ProductsAdmin";
import UsersAdmin from "../components/Admin/UsersAdmin/UsersAdmin";
import WelcomeAdmin from "../components/Admin/WelcomeAdmin/WelcomeAdmin";
import AddCategory from "../pages/Admin/AddCategory/AddCategory";
import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import AdminPanel from "../pages/Admin/AdminPanel/AdminPanel";
import EditProduct from "../pages/Admin/EditProduct/EditProduct";
const adminRoutes = [
  {
    path: "/admin",
    element: <AdminPanel />,
    children: [
      { index: true, element: <WelcomeAdmin end /> },
      {
        path: "products",
        element: <ProductsAdmin />,
      },
      { path: "products/:id", element: <EditProduct /> },
      { path: "products/new", element: <AddProduct /> },
      { path: "categories", element: <CategoriesAdmin /> },
      { path: "categories/new", element: <AddCategory /> },
      { path: "users", element: <UsersAdmin /> },
    ],
  },
];

export default adminRoutes;
