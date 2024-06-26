import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './AdminForgotPasswordReset.css';

const AdminForgotPasswordReset = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email submission (replace with actual logic)
    console.log('Email submitted:', email);
    
    // Simulate password reset logic (replace with actual logic)
    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp. Vui lòng thử lại.');
      return;
    }
    
    console.log('Cập nhật thành công');
    // Redirect to login page after successful password reset
    // history.push('/admin/login');
  };

  return (
    <div className="adminforgotpasswordreset">
      <div className="adminforgotpasswordreset__form-container">
        <h2 className="adminforgotpasswordreset__title">Tạo Mới Mật Khẩu</h2>
        <p className="adminforgotpasswordreset__subtitle">Trùm Kim Cương</p>
        <form onSubmit={handleSubmit} className="adminforgotpasswordreset__form">
          
          {/* New password input */}
          <div className="adminforgotpasswordreset__input-group">
            <label className="adminforgotpasswordreset__label">Mật Khẩu Mới:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="adminforgotpasswordreset__input"
            />
          </div>

          {/* Confirm password input */}
          <div className="adminforgotpasswordreset__input-group">
            <label className="adminforgotpasswordreset__label">Xác Nhận Mật Khẩu Mới:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="adminforgotpasswordreset__input"
            />
          </div>

          <button type="submit" className="adminforgotpasswordreset__button">Tạo Mật Khẩu Mới</button>
        </form>
      </div>
    </div>
  );
};

export default AdminForgotPasswordReset;
