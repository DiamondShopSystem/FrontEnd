import { Routes, Route } from "react-router-dom";
// Admin  //

//Layout
import AdminLayout from "./components/admin/layouts/AdminLayout";

//Auth

import AdminLogin from "./components/admin/pages/auth/AdminLogin";
import AdminForgotPassword from "./components/admin/pages/auth/AdminForgotPassword";
import AdminForgotPasswordOtp from "./components/admin/pages/auth/AdminForgotPasswordOtp";
import AdminForgotPasswordReset from "./components/admin/pages/auth/AdminForgotPasswordReset";

//Profile
import AdminProfile from "./components/admin/pages/profile/Profile";

//Dashboard
import Dashboard from "./components/admin/pages/dashboard/Dashboard";

//Product 
import Product from "./components/admin/pages/product/Product";
import CreateProduct from "./components/admin/pages/product/CreateProduct";
import UpdateProduct from "./components/admin/pages/product/UpdateProduct";
import DetailProduct from "./components/admin/pages/product/DetailProduct";


//Category
import Category from "./components/admin/pages/category/Category";
import CreateCategory from "./components/admin/pages/category/CreateCategory";
import UpdateCategory from "./components/admin/pages/category/UpdateCategory";
import DetailCategory from "./components/admin/pages/category/DetailCategory";

//Staff Account
import Staff from "./components/admin/pages/account/staff/Staff";
import CreateStaff from "./components/admin/pages/account/staff/CreateStaff";
import UpdateStaff from "./components/admin/pages/account/staff/UpdateStaff";
import DetailStaff from "./components/admin/pages/account/staff/DetailStaff";

//Customer Account
import Cusomter from "./components/admin/pages/account/customer/Customer";
import CreateCusomter from "./components/admin/pages/account/customer/CreateCustomer";
import UpdateCustomer from "./components/admin/pages/account/customer/UpdateCustomer";
import DetailCustomer from "./components/admin/pages/account/customer/DetailCustomer";

//Role
import Role from "./components/admin/pages/role/Role";

//Order 
import Order from "./components/admin/pages/order/Order";

//Client //

//Auth
import UserLogin from "./components/client/pages/auth/UserLogin";
import VerifyOtp from "./components/client/pages/auth/VerifyOtp";
//Home
import Home from "./components/client/pages/home/Home";

//Product
import ProductsPage from "./components/client/pages/product/ProductsPage";
import ProductDetail from "./components/client/pages/product/ProductDetail";

//Cart
import Cart from "./components/client/pages/cart/Cart";

//Promotion
import Promotion from "./components/client/pages/promotion/Promotion";
import AdminRequireAuth from "./components/admin/RequireAuth";
import LayoutOutlet from "./components/admin/layouts/LayoutOutlet";
import ClientLayout from "./components/client/layouts/ClientLayout";
import RequireAuth from "./components/client/pages/RequireAuth";
//User
import UserProfile from "./components/client/pages/profile/UserProfile";
import UserInfoDetail from "./components/client/pages/profile/UserInfoDetail";
import HistoryOrder from "./components/client/pages/profile/HistoryOrder";
import MyVoucher from "./components/client/pages/profile/MyVoucher";
//Guide
import SizeGuidePage from "./components/client/pages/guide/SizeGuidePage";
import SizeRingGuide from "./components/client/pages/guide/SizeRingGuide";
import SizeNecklaceGuide from "./components/client/pages/guide/SizeNecklaceGuide";
import SizeBraceletGuide from "./components/client/pages/guide/SizeBraceletGuide";
// Blog
import Blog from './components/client/pages/blog/Blog'
import BlogDiamondTips from "./components/client/pages/blog/BlogDiamondTips";
import BlogFAQs from "./components/client/pages/blog/BlogFAQs";
import BlogDiamondPrice from "./components/client/pages/blog/BlogDiamondPrice";

import PersistLogin from "./components/client/pages/PersistLogin";
function App() {
  return (
    <>
      <Routes>
        {/* Client Path  */}
        {/* Authen  */}
        <Route path="login" element={<UserLogin />} />
        <Route path="login/verify/otp" element={<VerifyOtp />} />
        <Route element={<ClientLayout />}>
          {/* Home  */}
          <Route path="/" element={<Home />} />
          {/* Product  */}
          <Route path="products/:slug/" element={<ProductsPage />} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="info" />
          {/* Cart  */}
          <Route path="cart" element={<Cart />} />
          {/* Promotion  */}
          <Route path="promotion" element={<Promotion />} />
          {/* Blog */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/diamond-tips" element={<BlogDiamondTips />} />
          <Route path="blog/faqs" element={<BlogFAQs />} />
          <Route path="blog/diamond-price" element={<BlogDiamondPrice />} />
          {/* User */}
          <Route path="user/" element={<UserProfile />}>
            <Route path="info" element={<UserInfoDetail />} />
          </Route>
        </Route>
        {/* Guide Page */}
        <Route path="size-guide" element={<SizeGuidePage />} />
        <Route path="size-guide/ring" element={<SizeRingGuide />} />
        <Route path="size-guide/bracelet" element={<SizeBraceletGuide />} />
        <Route path="size-guide/necklace" element={<SizeNecklaceGuide />} />
        {/* Admin Path  */}
        <Route path="/admin">

          {/* Authen */}
          <Route path="login" element={<AdminLogin />} />
          <Route path="forgotpassword" element={<AdminForgotPassword />} />
          <Route path="forgotpassword/otp" element={<AdminForgotPasswordOtp />} />
          <Route path="forgotpassword/reset" element={<AdminForgotPasswordReset />} />
          {/* Dashboard  */}
          <Route element={<AdminLayout />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="product/create" element={<CreateProduct />} />
            <Route path="product/edit/:id" element={<UpdateProduct />} />
            <Route path="product/detail/:id" element={<DetailProduct />} />
            <Route path="category" element={<Category />} />
            <Route path="category/create" element={<CreateCategory />} />
            <Route path="category/edit/:id" element={<UpdateCategory />} />
            <Route path="category/detail/:id" element={<DetailCategory />} />
            <Route path="account">
              <Route path="staff" element={<Staff />} />
              <Route path="staff/create" element={<CreateStaff />} />
              <Route path="staff/edit/:id" element={<UpdateStaff />} />
              <Route path="staff/detail/:id" element={<DetailStaff />} />
              <Route path="customer" element={<Cusomter />} />
            </Route>
          </Route>
        </Route>
      </Routes >

    </>
  );
}

export default App;
