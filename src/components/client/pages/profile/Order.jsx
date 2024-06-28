import React, { useState } from 'react';
import { Table, Badge, Container, Button } from 'react-bootstrap';
import '../../styles/OrderDetail.css'
import OrderDetail from './OrderDetail';
import { useNavigate } from 'react-router-dom';
import '../../styles/Order.css'

const orders = [
    { id: 1, product: 'Product 1', status: 'Unconfirmed', date: '2023-01-10', total: 100, shippingFee: 10 },
    { id: 2, product: 'Product 2', status: 'Confirmed', date: '2023-01-12', total: 150, shippingFee: 15 },
    { id: 3, product: 'Product 3', status: 'On the way', date: '2023-01-14', total: 200, shippingFee: 20 },
    { id: 4, product: 'Product 4', status: 'Shipped', date: '2023-01-15', total: 400, shippingFee: 40 },
    { id: 5, product: 'Product 5', status: 'Deleted', date: '2023-01-16', total: 400, shippingFee: 40 },
    // Add more orders as needed
];

const getStatusBadge = (status) => {
    switch (status) {
        case 'Unconfirmed':
            return <Badge bg="warning">Unconfirmed</Badge>;
        case 'Confirmed':
            return <Badge bg="info">Confirmed</Badge>;
        case 'On the way':
            return <Badge bg="secondary">On The Way</Badge>;
        case 'Shipped':
            return <Badge bg="success">Shipped</Badge>;
        case 'Deleted':
            return <Badge bg="danger">Deleted</Badge>;
    }
};

const Order = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [filteredOrders, setFilteredOrders] = useState(orders);
    const [activeFilter, setActiveFilter] = useState('');
    const navigate = useNavigate();

    const handleRowClick = (order) => {
        setSelectedOrder(order);
        navigate(`/user/order?id=${order.id}`);
    };

    const handleBack = () => {
        setSelectedOrder(null);
        navigate(``)
    };

    // Function to filter orders by status
    const filterOrdersByStatus = (status) => {
        const filtered = orders.filter(order => order.status === status);
        setFilteredOrders(filtered);
        setActiveFilter(status);
    };

    // Function to reset filter (show all orders)
    const getAll = () => {
        setFilteredOrders(orders);
        setActiveFilter('');
    };

    return (
        <Container className="useroder__history">
            <h2>Đơn hàng</h2>

            {/* Filter buttons */}
            <div className="mb-3">
                <Button className={`me-2 btn-filter ${activeFilter === '' ? 'active' : ''}`} onClick={getAll}>
                    Tất cả
                </Button>
                <Button className={`me-2 btn-filter ${activeFilter === 'Unconfirmed' ? 'active' : ''}`} onClick={() => filterOrdersByStatus('Unconfirmed')}>
                    Chưa xác nhận
                </Button>
                <Button className={`me-2 btn-filter ${activeFilter === 'Confirmed' ? 'active' : ''}`} onClick={() => filterOrdersByStatus('Confirmed')}>
                    Đã xác nhận
                </Button>
                <Button className={`me-2 btn-filter ${activeFilter === 'On the way' ? 'active' : ''}`} onClick={() => filterOrdersByStatus('On the way')}>
                    Đang giao
                </Button>
                <Button className={`me-2 btn-filter ${activeFilter === 'Shipped' ? 'active' : ''}`} onClick={() => filterOrdersByStatus('Shipped')}>
                    Đã nhận
                </Button><Button className={`me-2 btn-filter ${activeFilter === 'Deleted' ? 'active' : ''}`} onClick={() => filterOrdersByStatus('Deleted')}>
                    Đã hủy
                </Button>

            </div>

            {/* Display orders */}
            {selectedOrder ? (
                <OrderDetail order={selectedOrder} onBack={handleBack}/>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.id} onClick={() => handleRowClick(order)}>
                                <td>{order.id}</td>
                                <td>{order.product}</td>
                                <td>{getStatusBadge(order.status)}</td>
                                <td>{order.date}</td>
                                <td>${order.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default Order;
