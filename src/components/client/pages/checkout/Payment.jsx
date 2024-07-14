import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Image, Table } from 'react-bootstrap';
import axios from 'axios';
import { Input, Radio } from 'antd';
import parse from 'html-react-parser';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import '../../styles/Client.css';

const Payment = () => {
    const [payment, setPayment] = useState();
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        fetchCartData();
    }, []);

    const handlePayment = (e) => {
        setPayment(e.target.value);
    }
    const submitPayment = async (e) => {
        try {
            if (payment == 'zalo') {
                const response = await axios.post('/payment/zalo',);
                // navigate(response.data.order_url, {replace: true})
                window.location.replace(response.data.order_url);
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    }
    const checkOrder = async () => {
        try {
            const response = await axios.get('/payment/zalo/callback');
            if (response.data.return_code === 1) {
                navigate("/payment/success");
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };
    const fetchCartData = async () => {
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
            console.error("Error fetching cart data:", error);
        }
    };

    return (
        <Container>
            <Row>
                <Col md={8} className='my-5'>
                    <div style={{ height: '200px' }} className="mb-3">
                        <Link to="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t3uKbanp3uSurjv8n-3b-Js7LisE7XMxSw&s" height={'180px'} alt="Trùm Kim Cương" />
                        </Link>
                    </div>
                    <nav className="checkout__breadcrumb">
                        <Link to="/cart" className="breadcrumb-item">Giỏ hàng</Link>
                        <Link to="/checkout" className="breadcrumb-item">Thông tin giao hàng</Link>
                        <span className="breadcrumb-item active">Phương thức thanh toán</span>
                    </nav>
                    <h3 style={{ fontSize: '18px', margin: '20px 0' }}>Phương thức vận chuyển</h3>
                    <Form>
                        <Form.Group className="mb-3 checkout__form-check" controlId="deliveryMethod">
                            <Form.Check type="radio" name="deliveryMethod" label="Giao hàng tận nơi" checked disabled />
                        </Form.Group>
                    </Form>
                    <h3 style={{ fontSize: '18px', margin: '20px 0' }}>Phương thức thanh toán</h3>
                    {/* <Form>
                        <Form.Group className="mb-3 checkout__form-check" controlId="paymentMethod1">
                            <Form.Check type="radio" name="paymentMethod" label="Thanh toán khi giao hàng (COD)" />
                        </Form.Group>
                        <Form.Group className="mb-3 checkout__form-check" controlId="paymentMethod2">
                            <Form.Check type="radio" name="paymentMethod" label="Thanh toán online bằng Paypal" />
                        </Form.Group>
                        <Form.Group className="mb-3 checkout__form-check" controlId="paymentMethod2">
                            <Form.Check type="radio" name="paymentMethod" label="Thanh toán online bằng Ví điện tử" />
                        </Form.Group>
                    </Form> */}
                    <Radio.Group onChange={handlePayment} value={payment}>
                        <Radio value={"cod"} className="mb-3 checkout__form-check" controlId="paymentMethod1">Thanh toán khi giao hàng (COD)</Radio>
                        <Radio value={"zalo"} className="mb-3 checkout__form-check" controlId="paymentMethod2">Thanh toán online bằng ZaloPAY</Radio>
                    </Radio.Group>
                    <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link to='/cart'>Giỏ hàng</Link>
                        <Button className='checkout__button' variant="primary" onClick={submitPayment} >
                            Hoàn tất đơn hàng
                        </Button>
                    </Col>
                </Col>
                <Col md={4} className='my-5'>
                    <div className="p-3 bg-light rounded">
                        <h2>Tóm tắt đơn hàng</h2>
                        <Table borderless>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ width: '25%' }}>
                                            <Image src={item.productInfo.thumbnail} style={{ width: '100%', height: 'auto', borderRadius: '20px', border: 'solid 1px gray' }} alt="Sản phẩm" />
                                        </td>
                                        <td style={{ width: '50%', verticalAlign: 'middle' }}>
                                            <div>
                                                <p style={{ color: 'black' }} className="mb-0">{item.productInfo.title}</p>
                                                <p style={{ color: 'gray' }} className="mb-0">{parse(`${item.productInfo.description}`)}</p>
                                            </div>
                                        </td>
                                        <td style={{ width: '25%', textAlign: 'right', verticalAlign: 'middle' }}>
                                            <p style={{ color: 'red' }} className="mb-0">{(item.productInfo.price * item.quantity)?.toLocaleString()}đ</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="border-top pt-3">
                            <div className="d-flex justify-content-between mb-2">
                                <Form.Group style={{ width: '65%' }} className="mb-3 checkout__form-input" controlId="voucher">
                                    <Form.Control type="text" placeholder='Mã giảm giá' />
                                </Form.Group>
                                <Button style={{ height: '38px', width: '30%' }}>Sử dụng</Button>
                            </div>
                            <div className="d-flex justify-content-between mb-2 border-top pt-2">
                                <span>Tạm tính</span>
                                <span>{totalPrice?.toLocaleString()}đ</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Phí vận chuyển</span>
                                <span>—</span>
                            </div>
                            <div className="d-flex justify-content-between fw-bold border-top pt-2">
                                <span>Tổng cộng</span>
                                <span>{totalPrice?.toLocaleString()}đ</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Payment;
