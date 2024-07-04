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
import ProductPage from "./components/client/pages/product/ProductPage";
import ProductDetail from "./components/client/pages/product/ProductDetails";

//Promotion
import Promotion from "./components/client/pages/promotion/Promotion";





function App() {
  return (
    <>
      <Routes>
        {/* Client Path  */}
        {/* Authen  */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/login/verify/otp" element={<VerifyOtp />} />
        {/* Home  */}
        <Route path="/" element={<Home />} />
        {/* Product  */}
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/products/:slug/:id" element={<ProductDetail />} />
        {/* Cart  */}
        {/* Checkout  */}
        {/* Promotion  */}
        <Route path="/promotion" element={<Promotion />} />
        {/* Admin Path  */}
        {/* Authen */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgotpassword" element={<AdminForgotPassword />} />
        <Route path="/admin/forgotpassword/otp" element={<AdminForgotPasswordOtp />} />
        <Route path="/admin/forgotpassword/reset" element={<AdminForgotPasswordReset />} />
        {/* Profile  */}
        <Route path="/admin/profile" element={<AdminLayout><AdminProfile /></AdminLayout>} />
        {/* Dashboard  */}
        <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        {/* Product  */}
        <Route path="/admin/product" element={<AdminLayout><Product /></AdminLayout>} />
        <Route path="/admin/product/create" element={<AdminLayout><CreateProduct /></AdminLayout>} />
        <Route path="/admin/product/edit/:id" element={<AdminLayout><UpdateProduct /></AdminLayout>} />
        <Route path="/admin/product/detail/:id" element={<AdminLayout><DetailProduct /></AdminLayout>} />
        {/* Category  */}
        <Route path="/admin/category" element={<AdminLayout><Category /></AdminLayout>} />
        <Route path="/admin/category/create" element={<AdminLayout><CreateCategory /></AdminLayout>} />
        <Route path="/admin/category/edit/:id" element={<AdminLayout><UpdateCategory /></AdminLayout>} />
        <Route path="/admin/category/detail/:id" element={<AdminLayout><DetailCategory /></AdminLayout>} />
        {/* Account Staff  */}
        <Route path="/admin/account/staff" element={<AdminLayout><Staff /></AdminLayout>} />
        <Route path="/admin/account/staff/create" element={<AdminLayout><CreateStaff /></AdminLayout>} />
        <Route path="/admin/account/staff/edit/:id" element={<AdminLayout><UpdateStaff /></AdminLayout>} />
        <Route path="/admin/account/staff/detail/:id" element={<AdminLayout><DetailStaff /></AdminLayout>} />
        {/* Account Cusomter  */}
        <Route path="/admin/account/customer" element={<AdminLayout><Cusomter /></AdminLayout>} />
        <Route path="/admin/account/customer/create" element={<AdminLayout><CreateCusomter /></AdminLayout>} />
        <Route path="/admin/account/customer/edit/:id" element={<AdminLayout><UpdateCustomer /></AdminLayout>} />
        <Route path="/admin/account/customer/detail/:id" element={<AdminLayout><DetailCustomer /></AdminLayout>} />
        {/* Order */}
        <Route path="/admin/order" element={<AdminLayout><Order /></AdminLayout>} />
        {/* Role */}
        <Route path="/admin/role" element={<AdminLayout><Role /></AdminLayout>} />

      </Routes>

    </>
  );
}

export default App;
