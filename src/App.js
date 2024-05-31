import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserLogin from "./components/client/UserLogin";
import VerifyOtp from "./components/client/VerifyOtp";
    
import AdminLogin from "./components/admin/AdminLogin";
import AdminMain from "./components/admin/AdminMain";

function App() {
  return (
    <Routes>
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/verify/otp" element={< VerifyOtp />} />
      <Route path="/admin/*" element={<AdminMain />} />
    </Routes>
  );
}

export default App;