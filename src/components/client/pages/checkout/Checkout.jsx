import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link, Redirect  } from 'react-router-dom';
import { Input, Radio } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Image, Table } from 'react-bootstrap';
import axios from 'axios';
import parse from 'html-react-parser';
import '../../styles/Client.css';

const Checkout = () => {
    const navigate = useNavigate();
    const [payment, setPayment] = useState();
    const handlePayment = (e) => {
        setPayment(e.target.value);
    }
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    useEffect(() => {
        fetchCartData();
    }, []);
    const submitPayment = async (e) => {
        const configuration = {
            method: "post",
            url: "payment/zalo",
            data: {
                totalPrice: totalPrice,
                fullName: fullName,
                phone: phone,
                address: address
            },
        };

        await axios(configuration)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                console.log(checkResult);
                window.location.href = checkResult.order_url;
                // navigate(checkResult.order_url, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    }
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
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t3uKbanp3uSurjv8n-3b-Js7LisE7XMxSw&s" height={'180px'} alt="Trùm Kim Cương" />
                        </Link>
                    </div>
                    {/* <nav className="checkout__breadcrumb">
                        <Link to="/cart" className="breadcrumb-item">Giỏ hàng</Link>
                        <span className="breadcrumb-item active">Thông tin giao hàng</span>
                        <span className="breadcrumb-item active">Phương thức thanh toán</span>
                    </nav> */}
                    <h3 style={{ fontSize: '18px', margin: '20px 0' }}>Thông tin giao hàng</h3>
                    <Form>
                        <Form.Group className="mb-3 checkout__form-input" controlId="name">
                            <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Họ và Tên' />
                        </Form.Group>
                        <Form.Group className="mb-3 checkout__form-input" controlId="phone">
                            <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Số điện thoại" />
                        </Form.Group>
                        <Form.Group className="mb-3 checkout__form-input" controlId="address">
                            <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Địa chỉ" />
                        </Form.Group>
                        <h3 style={{ fontSize: '18px', margin: '20px 0' }}>Phương thức thanh toán</h3>
                        <Radio.Group onChange={handlePayment} value={payment}>
                            <Radio value={"cod"} className="mb-3 checkout__form-check" controlId="paymentMethod1">Thanh toán khi giao hàng (COD)</Radio>
                            <Radio value={"zalo"} className="mb-3 checkout__form-check" controlId="paymentMethod2">Thanh toán online bằng Zalo Pay</Radio>
                        </Radio.Group>
                        <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link to='/cart'>Giỏ hàng</Link>
                            <Button className='checkout__button' variant="primary" onClick={submitPayment} >
                                Hoàn tất đơn hàng
                            </Button>
                        </Col>
                    </Form>
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

export default Checkout;
