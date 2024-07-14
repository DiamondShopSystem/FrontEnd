import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Client.css';
import { Link } from 'react-router-dom';

const OrderDetail = () => {
    const order = {
        id: 'ORD001',
        date: '2023-07-10',
        total: 60800000,
        status: 'Đã hoàn thành',
        paymentMethod: 'COD',
        products: [
            {
                name: "Vòng đeo tay đính đá CZ vàng 10K Aretha S 5C",
                price: 30400000,
                quantity: 2,
                total: 60800000,
                description: "10KW / ĐÁ CZ WHIRD5.5x1 / ĐÁ CZ WHIRD2.1x8,1.8x16,1.5x14,1.2x14,1.1x176",
                thumbnail: "https://noraydesigns.com/cdn/shop/articles/diamond_quality_e937434a-7bdf-41fd-bd81-5935707348e8.jpg?v=1614681170"
            }
        ],
        customer: {
            fullName: "Nguyen Tan Phuoc",
            phone: '0866792159',
            address: "Landmark 81"
        }
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Đã hoàn thành':
                return 'bg-success';
            case 'Đang vận chuyển':
                return 'bg-info';
            case 'Đang xử lí':
                return 'bg-warning';
            default:
                return 'bg-secondary';
        }
    };

    return (
        <Container className='orders__container'>
            <h2 className="my-4">Chi tiết đơn hàng</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Hình ảnh</th>
                        <th>Sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {order.products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    src={product.thumbnail}
                                    alt={product.name}
                                    style={{ height: '50px', width: '50px' }}
                                />
                            </td>
                            <td>
                                <Link to="/:id">
                                    {product.name}
                                </Link>
                                <br />
                                {product.description}
                            </td>
                            <td>{product.price.toLocaleString()}đ</td>
                            <td>{product.quantity}</td>
                            <td>{product.total.toLocaleString()}đ</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-end">
                <div className="me-4">
                    <p><b>Giá sản phẩm: {order.total.toLocaleString()}đ</b></p>
                    <p><b>Giao hàng tận nơi: 0đ</b></p>
                    <p><strong>Tổng tiền: {order.total.toLocaleString()}đ</strong></p>
                </div>
            </div>
            <Row>
                <Col md={12}>
                    <h4><strong>Thông Tin</strong></h4>
                    <div className="border p-3">
                        <p>Họ và Tên: {order.customer.fullName}</p>
                        <p>Số Điện Thoại: {order.customer.phone}</p>
                        <p>Địa chỉ: {order.customer.address}</p>
                        <p>Trạng thái: <span className={`badge ${getStatusClass(order.status)}`}>{order.status}</span></p>
                        <p>Hình thức thanh toán: <b>{order.paymentMethod}</b></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderDetail;
