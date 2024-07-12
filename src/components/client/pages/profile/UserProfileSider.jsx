import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/UserProfileSider.css';

const UserProfileSider = () => {
  return (
    <div className="userprofilesider__sidebar">
      <ul>
        <li><Link to="/user/info">Thông tin tài khoản</Link></li>
        <li><Link to="/user/voucher">Mã giảm của tôi</Link></li>
        <li><Link to="/user/history-order">Lịch sử mua hàng</Link></li>
        <li><Link to="/user/logout">Đăng xuất</Link></li>
      </ul>
    </div>
  );
};

export default UserProfileSider;
