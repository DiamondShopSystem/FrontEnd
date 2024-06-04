import { Routes, Route } from "react-router-dom";
import UserLogin from "./components/client/pages/auth/UserLogin";
import VerifyOtp from "./components/client/pages/auth/VerifyOtp";
import Home from "./components/client/pages/home/Home";
import Account from "./components/admin/pages/account/Account";
import Dashboard from "./components/admin/pages/dashboard/Dashboard";
import AdminLayout from "./components/admin/layouts/AdminLayout";
import Category from "./components/admin/pages/category/Category";
import CreateCategory from "./components/admin/pages/category/CreateCategory";



function App() {
  return (

    <Routes>

      {/* Client Path  */}
      <Route path="/" element={<Home />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/verify/otp" element={<VerifyOtp />} />

      {/* Admin Path  */}

      <Route path="/admin/category" element={<AdminLayout><Category /></AdminLayout>} />
      <Route path="/admin/category/create" element={<AdminLayout><CreateCategory /></AdminLayout>} />
      <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/admin/account" element={<AdminLayout><Account /></AdminLayout>} />
    </Routes>


  );
}

export default App;
