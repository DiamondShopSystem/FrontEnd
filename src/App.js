// import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import VerifyOtp from "./components/client/VerifyOtp";
import UserLogin from "./components/client/UserLogin";
import VerifyOtp from "./components/client/VerifyOtp";
import AdminLogin from "./components/admin/AdminLogin";
import AdminMain from "./components/admin/AdminMain";
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Header />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/verify/otp" element={< VerifyOtp />} />
      <Route path="/admin/*" element={<AdminMain />} />
    </Routes>

  );
}

export default App;