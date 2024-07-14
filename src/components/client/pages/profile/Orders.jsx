import React, { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Client.css'
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();
  const orders = [
    {
      id: 'ORD001',
      date: '2023-07-10',
      total: 1500000,
      status: 'Đang xử lý'
    },
    {
      id: 'ORD002',
      date: '2023-07-11',
      total: 2000000,
      status: 'Hoàn thành'
    },
    {
      id: 'ORD003',
      date: '2023-07-12',
      total: 3500000,
      status: 'Đang giao hàng'
    },
    {
      id: 'ORD004',
      date: '2023-07-13',
      total: 2500000,
      status: 'Đã hủy'
    }
  ];
  const handleRowClick = (order) => {
    setSelectedOrder(order);
    navigate(`/user/orders/${order.id}`);
  };

  return (
    <Container className='orders__container'>
      <h2 className="my-4">Danh sách đơn hàng</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mã đơn</th>
            <th>Ngày đặt</th>
            <th>Thành tiền (VND)</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr style={{cursor: 'pointer'}} key={order.id} onClick={() => handleRowClick(order)}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.total.toLocaleString()}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
