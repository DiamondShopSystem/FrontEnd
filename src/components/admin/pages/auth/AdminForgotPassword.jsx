// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Để xử lý liên kết giữa các trang
import "../../styles/AdminForgotPassword.css";
import { useHistory } from 'react-router-dom';

const AdminForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic gửi email và chuyển hướng
        console.log('Email submitted:', email);
        // Chuyển hướng đến trang nhập OTP
        //  history.push('/admin/forgotpassword/otp');
    };




    return (
        <div className="adminforgotpass">
            {/* adminlogin */}
            <div className="adminforgotpass__form-container">
                <h2 className="adminforgotpass__title">Quên Mật Khẩu</h2>
                <p className="adminforgotpass__subtitle">Trùm Kim Cương</p>
                <form onSubmit={handleSubmit} className="adminforgotpass__form">
                    <div className="adminforgotpass__input-group">
                        <label className="adminforgotpass__label">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="adminforgotpass__input"
                        />
                    </div>
                    {message && <p style={{ color: 'red' }} className="adminforgotpassword__message"> {message}</p>}

                    <button type="submit" className="adminforgotpass__button">Gửi</button>
                </form>

            </div>
        </div>
    );
};

export default AdminForgotPassword;
