import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserLogin from "./components/client/UserLogin";
import VerifyOtp from "./components/client/VerifyOtp";
import AdminLogin from "./components/admin/AdminLogin";
import AdminPage from "./components/admin/routesAdmin";

function App() {
  return (
        <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/verify/otp" element={< VerifyOtp />} />
      <Route path="admin/*" element={<AdminPage />} />
    </Routes>
  );
}

export default App;