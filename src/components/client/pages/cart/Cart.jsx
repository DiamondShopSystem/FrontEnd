import React, { useState, useEffect } from 'react';
import '../../styles/Cart.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/cart/get');
            if (response.data.code === 200) {
                const products = response.data.cart.products.map(product => ({
                    ...product,
                    productInfo: product.productInfo[0],
                }));
                setCart(products);
                setTotalPrice(response.data.cart.totalPrice);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const updateCartQuantity = async (productId, quantity, e) => {
        const configuration = {
            method: "patch",
            url: "cart/update/",
            data: {
                productId,
                quantity
            },
        };
        await axios(configuration)
            .then((result) => {
                fetchData();
            })
            .catch((error) => {

            });
    }

    const handleQuantityChange = (index, delta) => {
        const newCartData = [...cart];
        newCartData[index].quantity += delta;
        if (newCartData[index].quantity < 1) {
            newCartData[index].quantity = 1;
        }
        setCart(newCartData);

        updateCartQuantity(newCartData[index].product_id, newCartData[index].quantity);
    };

    const handleInputChange = (index, value) => {
        const newCartData = [...cart];
        newCartData[index].quantity = value < 1 ? 1 : value;
        setCart(newCartData);
        updateCartQuantity(newCartData[index].product_id, newCartData[index].quantity);
    };

    const handleDelete = async (id) => {
        console.log(id);
        axios.delete(`/cart/delete/${id}`)
            .then(response => {
                console.log(response);
                fetchData();
                toast.success('Xóa thành công');
            })
            .catch(error => {
                console.error(error);
                toast.error('Xóa không thành công');
            });
    };

    return (
        <>
            <ToastContainer />
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
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="cart__product-info">
                                            <Link to='/'>
                                                <img src={item.productInfo.thumbnail} alt="Ảnh" className="cart__product-image" />
                                            </Link>
                                            <div>
                                                <div>{item.productInfo.title}</div>
                                                <div>Ni (size): {item.size}</div> {/* Hiển thị size được chọn */}
                                            </div>
                                            <div className="cart__trash-icon" onClick={() => handleDelete(item.product_id)}>
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

                            <span style={{ marginLeft: '10px', fontSize: '25px' }}>{totalPrice?.toLocaleString()}đ</span>
                        </div>
                        <div className="checkout">
                            <Link to="/checkout">
                                <button className="cart__checkout-btn">THANH TOÁN</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Cart;
