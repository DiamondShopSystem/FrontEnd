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
import UpdateProduct from "./components/admin/pages/product/UpdateProduct";
import UserLayout from "./components/client/profile/UserLayout";
import UserProfile from "./components/client/profile/UserProfile";
import Wishlist from "./components/client/profile/content/Wishlist";
import Order from "./components/client/profile/content/Order";
import UserInfo from "./components/client/profile/content/UserInfo";
import SizeGuidePage from "./components/client/pages/home/UserService/SizeGuidePage";
import PaymentGuidePage from "./components/client/pages/home/UserService/PaymentGuidePage";
import SizeRingGuide from "./components/client/pages/home/UserService/SizeRingGuide";
import SizeBraceletGuide from "./components/client/pages/home/UserService/SizeBraceletGuide";
import SizeNecklaceGuide from "./components/client/pages/home/UserService/SizeNecklaceGuide";

// import 'dotenv/config';

function App() {
  return (

    <>
      <Routes>
        {/* Client Path  */}
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/verify/otp" element={<VerifyOtp />} />
        <Route path="/user/promotion" element={<Promotion />} />
        <Route path="/user/product/ring" element={<RingProducts />} />
        <Route path="/user/product/ring/detail/:id" element={<RingProductDetail />} />
        {/* Admin Path  */}
        {/* Authen */}
        <Route path="/admin/login" element={<AdminLogin />} />
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
        <Route path="/admin/account/staff" element={<AdminLayout><StaffAccount /></AdminLayout>} />
        <Route path="/admin/account/user" element={<AdminLayout><UserAccount /></AdminLayout>} />
        {/* User */}
        <Route path="/customer" element={<UserLayout />}>
          <Route path="info" element={<UserInfo />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="order" element={<Order />} />
          <Route path="wishlist" element={<Wishlist />} />
        </ Route>
        {/* Test Size Guide */}
        <Route path="/test" element={<SizeGuidePage />} />
        <Route path="/test1" element={<PaymentGuidePage />} />
        <Route path="/article/1" element={<SizeRingGuide />} />
        <Route path="/article/2" element={<SizeBraceletGuide />} />
        <Route path="/article/3" element={<SizeNecklaceGuide />} />
      </Routes>

    </>
  );
}

export default App;
