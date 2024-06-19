import { Routes, Route } from "react-router-dom";
import UserLogin from "./components/client/pages/auth/UserLogin";
import VerifyOtp from "./components/client/pages/auth/VerifyOtp";
import Home from "./components/client/pages/home/Home";
import AdminAccount from "./components/admin/pages/account/AdminAccount";
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
        {/* Admin Path  */}
        {/* Authen */}
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* Dashboard  */}
        <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        {/* Product  */}
        <Route path="/admin/product/detail/:id" element={<AdminLayout><DetailProduct /></AdminLayout>} />
        <Route path="/admin/product" element={<AdminLayout><Product /></AdminLayout>} />
        <Route path="/admin/product/create" element={<AdminLayout><CreateProduct /></AdminLayout>} />
        {/* Category  */}
        <Route path="/admin/category" element={<AdminLayout><Category /></AdminLayout>} />
        <Route path="/admin/category/create" element={<AdminLayout><CreateCategory /></AdminLayout>} />
        <Route path="/admin/category/detail/:id" element={<AdminLayout><DetailCategory /></AdminLayout>} />
        <Route path="/admin/category/edit/:id" element={<AdminLayout><UpdateCategory /></AdminLayout>} />
        {/* Account  */}
        <Route path="/admin/account/adminaccount" element={<AdminLayout><AdminAccount /></AdminLayout>} />
        <Route path="/admin/account/useraccount" element={<AdminLayout><UserAccount /></AdminLayout>} />
      </Routes>

    </>
  );
}

export default App;
