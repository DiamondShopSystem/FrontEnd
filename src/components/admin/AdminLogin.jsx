import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../../config/firebase';
import Sparkle from './Sparkle';
import './AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [forgotPassword, setForgotPassword] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const navigate = useNavigate();

    
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setMessage('Đăng nhập Google thành công với email: ' + result.user.email);
                navigate('/admin');
            })
            .catch((error) => {
                setMessage('Đăng nhập Google thất bại: ' + error.message);
            });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        // setMessage('Đăng nhập thành công với email: ' + email);
        console.log(email);
        console.log(password);
        // fetch('http://localhost:3000/api/v1/admin/login', {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(email)
        // })
        //     .then((response) => response.json())
        //     .then((result) => {
        //         console.log(result)
        //     })
        // navigate('/admin');
    };

    const handleForgotPassword = (event) => {
        event.preventDefault();
        setOtpSent(true);
        setMessage('OTP đã được gửi tới email: ' + email);
    };

    const handleVerifyOtp = (event) => {
        event.preventDefault();
        if (otp === '123456') {
            setOtpVerified(true);
            setMessage('OTP xác nhận thành công');
        } else {
            setMessage('OTP không chính xác');
        }
    };

    const handleResetPassword = (event) => {
        event.preventDefault();
        setMessage('Mật khẩu đã được đổi thành công');
        setOtpVerified(false);
        setForgotPassword(false);
        setOtpSent(false);
    };

    const handleBack = () => {
        setForgotPassword(false);
        setOtpSent(false);
        setOtpVerified(false);
        setMessage('');
    };

    return (

        <div className="login-container">
            <div className="overlay"></div>
            <Sparkle />
            <div className="login-form">
                <h2>Đăng Nhập</h2>
                <p>Trùm Kim Cương</p>
                {forgotPassword ? (
                    otpSent ? (
                        otpVerified ? (
                            <form onSubmit={handleResetPassword}>s
                                <div className="input-group">
                                    <label>Mật Khẩu Mới:</label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={e => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="login-button">Đổi Mật Khẩu</button>
                                <button type="button" className="back-button" onClick={handleBack}>Quay lại</button>
                            </form>
                        ) : (
                            <form onSubmit={handleVerifyOtp}>
                                <div className="input-group">
                                    <label>Nhập OTP:</label>
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={e => setOtp(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="login-button">Xác Nhận OTP</button>
                                <button type="button" className="back-button" onClick={handleBack}>Quay lại</button>
                            </form>
                        )
                    ) : (
                        <form onSubmit={handleForgotPassword}>
                            <div className="input-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="login-button">Gửi OTP</button>
                            <button type="button" className="back-button" onClick={handleBack}>Quay lại</button>
                        </form>
                    )
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Tên Đăng Nhập:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Mật Khẩu:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="forgot-password-link">
                            <button type="button" onClick={() => setForgotPassword(true)}>Quên Mật Khẩu</button>
                        </div>

                        <button type="submit" className="login-button">Login</button>
                    </form>
                )
                }
                <button className="google-button" onClick={handleGoogleLogin}>
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" /> Sign in with Google
                </button>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default AdminLogin;
