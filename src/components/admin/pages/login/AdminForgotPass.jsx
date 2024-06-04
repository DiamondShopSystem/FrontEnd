import React, { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../../firebase-config';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Login.css';

function AdminForgotPass() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const navigate = useNavigate();

    const handleForgotPassword = (event) => {
        event.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setOtpSent(true);
                setMessage('OTP đã được gửi tới email: ' + email);
            })
            .catch((error) => {
                setMessage('Lỗi khi gửi OTP: ' + error.message);
            });
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
        setOtpSent(false);
    };

    return (
        <div className="forgot-password">
            <div className="forgot-password__form-container">
                <h2 className="forgot-password__title">Thế Giới Kim Cương</h2>
                {otpSent ? (
                    otpVerified ? (
                        <form onSubmit={handleResetPassword} className="forgot-password__form">
                            <div className="forgot-password__input-group">
                                <label className="forgot-password__label">Mật Khẩu Mới:</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    required
                                    className="forgot-password__input"
                                />
                            </div>
                            <button type="submit" className="forgot-password__button">Đổi Mật Khẩu</button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOtp} className="forgot-password__form">
                            <div className="forgot-password__input-group">
                                <label className="forgot-password__label">Nhập OTP:</label>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={e => setOtp(e.target.value)}
                                    required
                                    className="forgot-password__input"
                                />
                            </div>
                            <button type="submit" className="forgot-password__button">Xác Nhận OTP</button>
                        </form>
                    )
                ) : (
                    <form onSubmit={handleForgotPassword} className="forgot-password__form">
                        <div className="forgot-password__input-group">
                            <label className="forgot-password__label">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="forgot-password__input"
                            />
                        </div>
                        <button type="submit" className="forgot-password__button">Gửi OTP</button>
                    </form>
                )}
                {message && <p className="forgot-password__message">{message}</p>}
                <button onClick={() => navigate(-1)} className="forgot-password__back-button">Quay Lại</button>
            </div>
        </div>
    );
}

export default AdminForgotPass;
