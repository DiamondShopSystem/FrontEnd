import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Client.css";
import { FaRegCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
    return (
        <div className="order__success">
            <div className='circle__check'><FaRegCheckCircle /></div>
            <h2>Đặt Hàng Thành Công!</h2>
            <p>Cảm ơn bạn đã đặt hàng của chúng tôi. Đơn hàng của bạn đã được xử lý.</p>
            <Link to="/user/orders" className="order-success__link">Xem lịch sử mua hàng</Link>
            <Link to="/" className="order-success__link">Quay lại trang chủ</Link>
        </div>
    )
}

export default OrderSuccess;