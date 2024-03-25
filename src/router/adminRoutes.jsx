import CategoriesAdmin from "../pages/Admin/CategoriesAdmin/CategoriesAdmin";
import ProductsAdmin from "../pages/Admin/ProductsAdmin/ProductsAdmin";
import UsersAdmin from "../pages/Admin/UsersAdmin/UsersAdmin";
import WelcomeAdmin from "../pages/Admin/WelcomeAdmin/WelcomeAdmin";
import AdminLayout from "../layouts/AdminLayout";
import AddCategory from "../pages/Admin/AddCategory/AddCategory";
import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import AddUser from "../pages/Admin/AddUser/AddUser";
import EditCategory from "../pages/Admin/EditCategory/EditCategory";
import EditProduct from "../pages/Admin/EditProduct/EditProduct";
import EditUser from "../pages/Admin/EditUser/EditUser";
import BlogAdmin from "../pages/Admin/BlogAdmin/BlogAdmin";
import AddBlog from "../pages/Admin/AddBlog/AddBlog";
import EditBlog from "../pages/Admin/EditBlog/EditBlog";
const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <WelcomeAdmin /> },
      { path: "products", element: <ProductsAdmin /> },
      { path: "products/:id", element: <EditProduct /> },
      { path: "products/new", element: <AddProduct /> },
      { path: "categories", element: <CategoriesAdmin /> },
      { path: "categories/new", element: <AddCategory /> },
      { path: "categories/edit/:id", element: <EditCategory /> },
      { path: "users", element: <UsersAdmin /> },
      { path: "users/edit/:id", element: <EditUser /> },
      { path: "users/new", element: <AddUser /> },
      {
        path: "blogs",
        children: [
          { index: true, element: <BlogAdmin /> },
          { path: "new", element: <AddBlog /> },
          { path: "edit/:id", element: <EditBlog /> },
        ],
      },
    ],
  },
];

export default adminRoutes;
