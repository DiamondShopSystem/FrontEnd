// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Container, Nav, Tab, Row, Col, Form, Button } from 'react-bootstrap';
// import '../../styles/UserDetail.css';

// const mockUser = {
//   personalInfo: {
//     lastName: 'Nguyễn',
//     firstName: 'Phước',
//     address: '',
//     phoneNumber: '0866792159'
//   },
//   purchaseHistory: [
//     { id: 1, item: 'Sản phẩm A', date: '2023-01-01', amount: '100.000 VND' },
//     { id: 2, item: 'Sản phẩm B', date: '2023-02-01', amount: '200.000 VND' }
//   ],
//   orderHistory: [
//     { id: 1, item: 'Sản phẩm C', date: '2023-03-01', status: 'Đã giao hàng' },
//     { id: 2, item: 'Sản phẩm D', date: '2023-04-01', status: 'Đang xử lý' }
//   ]
// };

// const UserDetail = () => {
//   const [user, setUser] = useState(mockUser);

//   const handleInputChange = (e, section, field) => {
//     const value = e.target.value;
//     setUser({
//       ...user,
//       [section]: {
//         ...user[section],
//         [field]: value
//       }
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Thông tin đã được cập nhật:', user);
//   };

//   return (
//     <Container className='userdetail__info'>
//       <div className='userdetail__header'>
//         <h3>Tài khoản của tôi</h3>
//         <h4>Chào mừng {user.personalInfo.firstName} {user.personalInfo.lastName}</h4>
//       </div>
//       <Tab.Container id="user-details-tabs" defaultActiveKey="personal-info">
//         <Row>
//           <Col xs={11} sm={3}>
//             <div className="offset-1 offset-lg-0">
//             <h5 className='bottom-60'>DANH MỤC</h5>
//               <Nav variant="pills" className="flex-column">
//                 <Nav.Item>
//                   <Nav.Link eventKey="personal-info" className='navlink__custom bottom-30 fit'>Thông tin cá nhân</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey="purchase-history" className='navlink__custom bottom-30 fit'>Lịch sử mua hàng</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey="order-history" className='navlink__custom bottom-30 fit'>Lịch sử đặt hàng</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </div>
//           </Col>
//           <Col xs={10} sm={9}>
//             <div className="offset-1 offset-lg-0">
//               <Tab.Content>
//                 <Tab.Pane eventKey="personal-info">
//                   <Form className='userdetail__form' onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3" controlId="formLastName">
//                       <Form.Label>Họ</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Nhập họ"
//                         value={user.personalInfo.lastName}
//                         onChange={(e) => handleInputChange(e, 'personalInfo', 'lastName')}
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formFirstName">
//                       <Form.Label>Tên</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Nhập tên"
//                         value={user.personalInfo.firstName}
//                         onChange={(e) => handleInputChange(e, 'personalInfo', 'firstName')}
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formAddress">
//                       <Form.Label>Địa chỉ</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Nhập địa chỉ"
//                         value={user.personalInfo.address}
//                         onChange={(e) => handleInputChange(e, 'personalInfo', 'address')}
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formPhoneNumber">
//                       <Form.Label>Số điện thoại</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Nhập số điện thoại"
//                         value={user.personalInfo.phoneNumber}
//                         onChange={(e) => handleInputChange(e, 'personalInfo', 'phoneNumber')}
//                       />
//                     </Form.Group>
//                     {/* <Form.Group className="mb-3" controlId="formBirthDate">
//                       <Form.Label>Sinh nhật (không bắt buộc)</Form.Label>
//                       <DatePicker
//                         selected={user.personalInfo.birthDate}
//                         onChange={handleDateChange}
//                         dateFormat="dd/MM/yyyy"
//                         className="form-control"
//                       />
//                     </Form.Group> */}
//                     <Button variant="primary" type="submit">Xác nhận</Button>
//                   </Form>
//                 </Tab.Pane>
//                 <Tab.Pane eventKey="purchase-history">
//                   <h2>Lịch sử mua hàng</h2>
//                   <ul>
//                     {user.purchaseHistory.map((purchase) => (
//                       <li key={purchase.id}>
//                         {purchase.date}: {purchase.item} - {purchase.amount}
//                       </li>
//                     ))}
//                   </ul>
//                 </Tab.Pane>
//                 <Tab.Pane eventKey="order-history">
//                   <h2>Lịch sử đặt hàng</h2>
//                   <ul>
//                     {user.orderHistory.map((order) => (
//                       <li key={order.id}>
//                         {order.date}: {order.item} - {order.status}
//                       </li>
//                     ))}
//                   </ul>
//                 </Tab.Pane>
//               </Tab.Content>
//             </div>
//           </Col>
//         </Row>
//       </Tab.Container>
//     </Container>
//   );
// }

// export default UserDetail;


