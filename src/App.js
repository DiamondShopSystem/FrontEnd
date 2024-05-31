
import { Routes, Route } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import UserLogin from "./components/client/UserLogin";
import VerifyOtp from "./components/client/VerifyOtp";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/adminDashboard/adminDashboard";

function App() {
  return (
        <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/verify/otp" element={< VerifyOtp />} />
      <Route path="/*" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;