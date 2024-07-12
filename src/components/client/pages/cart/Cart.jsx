import React, { useState, useEffect } from 'react';
import '../../styles/Cart.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Cart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    // Lấy data thông qua API
    const fetchData = () => {
        axios.get('/cart/get')
            .then(function (response) {
                setCart(response.data.cart);
                console.log(response.data.cart);

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // // const [cartData, setCartData] = useState(cart);

    // const handleQuantityChange = (index, delta) => {
    //     const newCartData = [...cart];
    //     newCartData[index].quantity += delta;
    //     if (newCartData[index].quantity < 1) {
    //         newCartData[index].quantity = 1; // đảm bảo số lượng thấp nhất là 1
    //     }
    //     setCart(newCartData);
    // };

    // const handleInputChange = (index, value) => {
    //     const newCartData = [...cart];
    //     newCartData[index].quantity = value < 1 ? 1 : value; // đảm bảo số lượng thấp nhất là 1
    //     setCart(newCartData);
    // };

    // const handleDelete = (index) => {
    //     const newCartData = cart.filter((_, i) => i !== index);
    //     setCart(newCartData);
    // };



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
                        {cart?.products?.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="cart__product-info">
                                        <Link to='/'>
                                            <img src={item.productInfo.thumbnail} alt="Ảnh" className="cart__product-image" />
                                        </Link>
                                        <div>
                                            <div>{item.productInfo.title}</div>
                                            {/* <div>{item.details}</div> */}
                                            <div>Ni (size): {item.productInfo.size}</div>
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
                                <td>{item.productInfo.price?.toLocaleString()}đ</td>
                                <td><b>{(item.productInfo.price * item.quantity)?.toLocaleString()}đ</b></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="cart__footer">
                <div className="cart__total-amount">
                    <div className="total">
                        <span>TỔNG TIỀN (tạm tính): </span>
                        <span style={{ marginLeft: '10px', fontSize: '25px' }}>{calculateTotal()?.toLocaleString()}đ</span>
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
