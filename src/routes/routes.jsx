import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import About from "../pages/About/About";
import Contract from "../pages/Contract/Contract";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import PrivateRoute from "./Private/PrivateRoute";
import Overview from "../pages/Overview/Overview";
import MyProducts from "../pages/Overview/Seller/MyProducts";
import AddProducts from "../pages/Overview/Seller/AddProducts";
import SellerRoutes from "./Private/SellerRoutes";
import MyWishlist from "../Buyer/MyWishlist";
import BuyerRoute from "./Private/BuyerRoute";
import MyUser from "../pages/AllUser/MyUser";
import AllProducts from "../pages/Product/AllProducts";
import SellerApproved from "../pages/AllUser/SellerApproved";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contract-us",
        element: <Contract></Contract>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      // {
      //   path: "/dashboard",
      //   element: <Home></Home>,
      // },
      
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      // Buyer Route
      {
        path: "/dashboard/myWishlist",
        element: <BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>,
      },
      // Seller Route
      {
        path: "/dashboard/myProduct",
        element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>,
      },
      {
        path: "/dashboard/addProduct",
        element: <SellerRoutes><AddProducts></AddProducts></SellerRoutes>,
      },
      {
        path: "/dashboard/user",
        element: <MyUser></MyUser>,
      },
      {
        path: "/dashboard/seller/approved",
        element: <SellerApproved></SellerApproved>,
      },
      {
        path: "/dashboard/admin/product",
        element: <AllProducts></AllProducts>,
      },
    ],
  },
]);
