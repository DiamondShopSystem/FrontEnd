// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Để xử lý liên kết giữa các trang
import "./AdminForgotPasswordOtp.css";

const AdminForgotPasswordOtp = () => {
  const [otp, setOTP] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic gửi email và chuyển hướng
    console.log('Email submitted:', otp);
    // Chuyển hướng đến trang nhập OTP
    //  history.push('/admin/forgotpassword/otp');
  };

  return (
    <div className="adminforgotpasswordopt">
        {/* adminlogin */}
        <div className="adminforgotpasswordopt__form-container">
            <h2 className="adminforgotpasswordopt__title">Xác Nhận Otp</h2>
            <p className="adminforgotpasswordopt__subtitle">Trùm Kim Cương</p>
            <form onSubmit={handleSubmit} className="adminforgotpasswordopt__form">
                <div >
                    <input
                    type="text"
                    placeholder="Nhận OTP"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    minLength={6}
                    maxLength={6}
                    required
                    className="adminforgotpass__input"
                  />
                </div>
                
                <button type="submit" className="adminforgotpasswordopt__button">Xác Nhận</button>     
            </form>
            
        </div>
    </div>
);



};

export default AdminForgotPasswordOtp;
