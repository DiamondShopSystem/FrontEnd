import React, { useState } from 'react';
import '../../styles/Cart.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const initialCartData = [
    {
      name: "Nhẫn nam kim cương tấm vàng 10K Pinnacle 2C W",
      image: "https://product.hstatic.net/1000381168/product/upload_63cf3c9ae6d9483d98e737841bbc09e7_1024x1024.jpg",
      details: "10KW / ĐÁ CZ WHIRD4.0x1 / KC DIA WHIRD1.3x8",
      size: 25,
      quantity: 2,
      price: 18250000
    },
    {
      name: "Phí size nam",
      image: "https://product.hstatic.net/1000381168/product/upload_63cf3c9ae6d9483d98e737841bbc09e7_1024x1024.jpg",
      details: "10K / 23 / 25.5",
      size: 12,
      quantity: 3,
      price: 500000
    },
    {
      name: "Phí size nam",
      image: "https://product.hstatic.net/1000381168/product/upload_63cf3c9ae6d9483d98e737841bbc09e7_1024x1024.jpg",
      details: "10K / 4 / 20",
      quantity: 5,
      size: 22,
      price: 2000
    },
    {
      name: "Hoa tai kim cương 8 Hearts & Arrows vàng 14K Oriflame H&A 2C",
      image: "https://product.hstatic.net/1000381168/product/upload_63cf3c9ae6d9483d98e737841bbc09e7_1024x1024.jpg",
      details: "14KW / KC DIA WHIRD3.8(H&A)E/SI1)x2 / KC DIA WHIRD1.2x16,0.9x16",
      size: 52,
      quantity: 5,
      price: 45250000
    }
  ];

  const [cartData, setCartData] = useState(initialCartData);

  const handleQuantityChange = (index, delta) => {
    const newCartData = [...cartData];
    newCartData[index].quantity += delta;
    if (newCartData[index].quantity < 1) {
      newCartData[index].quantity = 1; // đảm bảo số lượng thấp nhất là 1
    }
    setCartData(newCartData);
  };

  const handleInputChange = (index, value) => {
    const newCartData = [...cartData];
    newCartData[index].quantity = value < 1 ? 1 : value; // đảm bảo số lượng thấp nhất là 1
    setCartData(newCartData);
  };

  const handleDelete = (index) => {
    const newCartData = cartData.filter((_, i) => i !== index);
    setCartData(newCartData);
  };

  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart__container">
      <div className="cart__header">
        <h1>Giỏ hàng của tôi</h1>
      </div>
      <div className="cart__table">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Sản Phẩm</th>
              <th>Số Lượng</th>
              <th>Đơn Giá</th>
              <th>Thành Tiền</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="cart__product-info">
                    <Link to='/'>
                      <img src={item.image} alt={item.name} className="cart__product-image" />
                    </Link>
                    <div>
                      <div>{item.name}</div>
                      <div>{item.details}</div>
                      <div>Ni (size): {item.size}</div>
                    </div>
                    <div className="cart__trash-icon" onClick={() => handleDelete(index)}>
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="cart__quantity-control">
                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleInputChange(index, parseInt(e.target.value))}
                    />
                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>
                </td>
                <td>{item.price.toLocaleString()}đ</td>
                <td><b>{(item.price * item.quantity).toLocaleString()}đ</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart__footer">
        <div className="cart__total-amount">
          <div className="total">
            <span>TỔNG TIỀN (tạm tính): </span>
            <span style={{ marginLeft: '10px', fontSize: '25px' }}>{calculateTotal().toLocaleString()}đ</span>
          </div>
          <div className="checkout">
            <button className="cart__checkout-btn">THANH TOÁN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
