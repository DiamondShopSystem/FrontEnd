import { Routes, Route } from "react-router-dom";
import UserLogin from "./components/client/pages/auth/UserLogin";
import VerifyOtp from "./components/client/pages/auth/VerifyOtp";
import Home from "./components/client/pages/home/Home";
import StaffAccount from "./components/admin/pages/account/StaffAccount";
import UserAccount from "./components/admin/pages/account/UserAccount";
import Dashboard from "./components/admin/pages/dashboard/Dashboard";
import AdminLayout from "./components/admin/layouts/AdminLayout";
import Category from "./components/admin/pages/category/Category";
import CreateCategory from "./components/admin/pages/category/CreateCategory";
import UpdateCategory from "./components/admin/pages/category/UpdateCategory";
import DetailCategory from "./components/admin/pages/category/DetailCategory";
import Product from "./components/admin/pages/product/Product";
import CreateProduct from "./components/admin/pages/product/CreateProduct";
import AdminLogin from "./components/admin/pages/auth/AdminLogin";
import DetailProduct from "./components/admin/pages/product/DetailProduct";
import Promotion from "./components/client/pages/promotion/Promotion";
import RingProducts from "./components/client/pages/home/RingProducts";
import RingProductDetail from "./components/client/pages/home/RingProductDetail";
import ProductPage from "./components/client/pages/product/ProductPage";
import ProductDetail from "./components/client/pages/product/ProductDetail";
import UpdateProduct from "./components/admin/pages/product/UpdateProduct";
import CheckOutCart from "./components/client/pages/checkout/CheckOutCart";
import AdminForgotPassword from "./components/admin/pages/auth/AdminForgotPassword";
import AdminForgotPasswordOtp from "./components/admin/pages/auth/AdminForgotPasswordOtp";
import AdminForgotPasswordReset from "./components/admin/pages/auth/AdminForgotPasswordReset";
// import 'dotenv/config';
function App() {
  return (

    <>
      <Routes>
        {/* Client Path  */}

        <Route path="/checkout" element={<CheckOutCart />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/verify/otp" element={<VerifyOtp />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/product/:slug/:id" element={<ProductDetail />} />
        {/* Admin Path  */}
        {/* Authen */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgotpassword" element={<AdminForgotPassword />} />
        <Route path="/admin/forgotpassword/otp" element={<AdminForgotPasswordOtp />} />
        <Route path="/admin/forgotpassword/reset" element={<AdminForgotPasswordReset />} />
        {/* Dashboard  */}
        <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        {/* Product  */}
        <Route path="/admin/product/detail/:id" element={<AdminLayout><DetailProduct /></AdminLayout>} />
        <Route path="/admin/product" element={<AdminLayout><Product /></AdminLayout>} />
        <Route path="/admin/product/create" element={<AdminLayout><CreateProduct /></AdminLayout>} />
        <Route path="/admin/product/edit/:id" element={<AdminLayout><UpdateProduct /></AdminLayout>} />
        {/* Category  */}
        <Route path="/admin/category" element={<AdminLayout><Category /></AdminLayout>} />
        <Route path="/admin/category/create" element={<AdminLayout><CreateCategory /></AdminLayout>} />
        <Route path="/admin/category/detail/:id" element={<AdminLayout><DetailCategory /></AdminLayout>} />
        <Route path="/admin/category/edit/:id" element={<AdminLayout><UpdateCategory /></AdminLayout>} />
        {/* Account  */}
        <Route path="/admin/account" element={<AdminLayout><StaffAccount /></AdminLayout>} />
        <Route path="/admin/account/create" element={<AdminLayout><CreateStaffAccount /></AdminLayout>} />
        <Route path="/admin/account/edit/:id" element={<AdminLayout><UpdateStaffAccount /></AdminLayout>} />
        <Route path="/admin/account/detail/:id" element={<AdminLayout><DetailStaffAccount /></AdminLayout>} />
        <Route path="/admin/account/user" element={<AdminLayout><UserAccount /></AdminLayout>} />
      </Routes>

    </>
  );
}

export default App;
