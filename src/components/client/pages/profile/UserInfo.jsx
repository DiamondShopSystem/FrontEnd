import React, { useState } from 'react';
import { Card, Form, Row, Col, Button, Container } from 'react-bootstrap';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    username: 'Nguyen Phuoc',
    email: 'example@example.com',
    phone: '0866792159',
    dob: '2003-15-09',
    address: 'zzzzz',
    ward: 'PHƯỜNG 03',
    district: 'Q. PHÚ NHUẬN',
    city: 'TP.HỒ CHÍ MINH',
  });

  // State để theo dõi trạng thái chỉnh sửa
  const [isEditing, setIsEditing] = useState(false);

  // Xử lý khi nhấn nút Cập nhật
  const handleUpdate = () => {
    console.log('Thông tin đã được cập nhật:', userInfo);
    setIsEditing(false); // Sau khi cập nhật xong, đặt lại trạng thái chỉnh sửa về false
  };

  // Xử lý thay đổi giá trị trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <Container className='userinfo__container' style={{ marginTop: '30px'}}>
      <Card className="mb-3 user-info-card" style={{width: '100%'}}>
      <Card.Header>Thông tin tài khoản</Card.Header>
      <Card.Body>
        <Row className="mb-3 align-items-center">
          <Col md={2} className="text-center">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png"
              alt="Avatar"
              className="rounded-circle"
              width="100"
              height="100"
            />
          </Col>
          <Col md={10}>
            <h5>{userInfo.username}</h5>
            <p>New - KH mới [01400401125]</p>
          </Col>
        </Row>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={userInfo.username}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Địa chỉ email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formDOB">
                <Form.Label>Ngày sinh</Form.Label>
                <Form.Control
                  type="text"
                  name="dob"
                  value={userInfo.dob}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formAddress">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formWard">
                <Form.Label>Phường/xã</Form.Label>
                <Form.Control
                  type="text"
                  name="ward"
                  value={userInfo.ward}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formDistrict">
                <Form.Label>Quận/Huyện</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={userInfo.district}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formCity">
                <Form.Label>Tỉnh/Thành</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={userInfo.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Form.Group>
            </Col>
          </Row>
          {isEditing ? (
            <Button variant="primary" onClick={handleUpdate}>
              Lưu thay đổi
            </Button>
          ) : (
            <Button variant="info" onClick={() => setIsEditing(true)}>
              Chỉnh sửa thông tin
            </Button>
          )}
        </Form>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default UserInfo;
