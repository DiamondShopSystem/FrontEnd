import { Container, Row, Col, Stack, Image, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../../styles/Footer.css'; // Import the new CSS file

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="footer-section p-4 text-white">
                    <Col className="mx-5">
                        <Stack>
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t3uKbanp3uSurjv8n-3b-Js7LisE7XMxSw&s"
                                alt="company logo"
                                rounded
                                width={150}
                                height={150}
                            />
                            <h2>Trùm Kim Cương</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h4>Về Trùm Kim Cương</h4>
                            <NavLink to="/story" className="nav-link text-white">Câu Chuyện</NavLink>
                            <NavLink to="/story2" className="nav-link text-white">Câu Chuyện 2</NavLink>
                            <NavLink to="/story3" className="nav-link text-white">Câu Chuyện 3</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h4>Dịch vụ khách hàng</h4>
                            <NavLink to="/test" className="nav-link text-white">Hướng dẫn đo size trang sức</NavLink>
                            <NavLink to="/test1" className="nav-link text-white">Hướng dẫn mua hàng và thanh toán</NavLink>
                            <NavLink to="/jewelry-guide" className="nav-link text-white">Cẩm nang sử dụng trang sức</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Kết nối với chúng tôi</h4>
                        <p>Email: contact@trumkimcuong.com</p>
                        <p>Phone: +84 123 456 789</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='text-center p-4 footer-bottom'>
                © 2021 Copyright: 
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    TrumKimCuong
                </a>
            </div>
        </footer>
    );
}

export default Footer;
