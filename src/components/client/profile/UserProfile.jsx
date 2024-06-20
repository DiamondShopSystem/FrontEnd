import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const location = useLocation();

  return (
    <div>
      {/* Header */}
      <Navbar bg="white" expand="lg" style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <Navbar.Brand as={NavLink} to="/" style={{ paddingLeft: '50px', width: '252px', fontSize: '20px', fontWeight: 'bold', color: '#083A6D' }}>
            Trùm Kim Cương
          </Navbar.Brand>
        <Container style={{marginLeft: 0}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={{fontWeight: 'bold', color: '#3333FF'}}>Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="bg-light" style={{ height: '100vh', position: 'fixed', width: '252px' }}>
            <Nav defaultActiveKey="/info" className="flex-column">
              <NavLink to="/customer/info" className="nav-link" activeClassName="active">Thông tin tài khoản</NavLink>
              <NavLink to="/customer/promotion" className="nav-link" activeClassName="active">Mã giảm của tôi</NavLink>
              <NavLink to="/customer/order" className="nav-link" activeClassName="active">Lịch sử mua hàng</NavLink>
              <NavLink to="/customer/wishlist" className="nav-link" activeClassName="active">Sản phẩm bạn quan tâm</NavLink>
              <NavLink to="/customer/logout" className="nav-link text-danger" activeClassName="active">Đăng xuất</NavLink>
            </Nav>
          </Col>

          {/* Content */}
          <Col md={10} style={{ marginLeft: '252px', backgroundClip: '#f5f5f5'}}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
