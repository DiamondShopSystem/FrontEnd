// import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import VerifyOtp from "./components/client/VerifyOtp";
import UserLogin from "./components/client/UserLogin";
import VerifyOtp from "./components/client/VerifyOtp";


function App() {
  return (
      <Routes>
        {/* <Route path="/user/verify/otp" element={<VerifyOtp />} /> */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/verify/otp" element={< VerifyOtp />} />
      </Routes>
      

  );
}

export default App;