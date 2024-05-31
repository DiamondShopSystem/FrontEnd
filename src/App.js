<<<<<<< Updated upstream
// import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route, BrowserRouter } from "react-router-dom";
>>>>>>> Stashed changes
import "./App.css";
// import VerifyOtp from "./components/client/VerifyOtp";
import UserLogin from "./components/client/UserLogin";
import VerifyOtp from "./components/client/VerifyOtp";
<<<<<<< Updated upstream

=======
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/adminDashboard/adminDashboard";
>>>>>>> Stashed changes

function App() {
  return (
      <Routes>
<<<<<<< Updated upstream
        {/* <Route path="/user/verify/otp" element={<VerifyOtp />} /> */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/verify/otp" element={< VerifyOtp />} />
      </Routes>
      

=======
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/verify/otp" element={<VerifyOtp />} />
        <Route path="/*" element={<AdminDashboard />} />
      </Routes>
>>>>>>> Stashed changes
  );
}

export default App;