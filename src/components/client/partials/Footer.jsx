import { Container, Row, Col, Stack, Image, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import '../styles/Footer.css'; // Import the new CSS file

const Footer = () => {
    return (
        <footer className="section__footer">
            <Container fluid className="footer__container">
                <Row className="p-4 footer__content">
                    <Col>
                        <Stack>
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t3uKbanp3uSurjv8n-3b-Js7LisE7XMxSw&s"
                                alt="company logo"
                                rounded
                                width={150}
                                height={"auto"}
                                style={{ paddingLeft: '16px' }}
                            />
                            <div >
                                <p style={{
                                    paddingTop: '10px',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    color: 'black'
                                }}>© TrumKimCuong. All rights reserved.</p>
                                <p>Đại học FPT, CNC Quận 9</p>
                                <p>ĐT: 028 39951703 - Fax: 028 3995 1702</p>
                            </div>

                        </Stack>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h4>Về Trùm Kim Cương</h4>
                            <NavLink to="/story" className="nav-link ">Câu chuyện</NavLink>
                            <NavLink to="/story2" className="nav-link ">Tuyển dụng</NavLink>
                            <NavLink to="/story3" className="nav-link ">Xuất khẩu</NavLink>
                        </Nav>

                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h4>Dịch vụ khách hàng</h4>
                            <NavLink to="/test" className="nav-link ">Hướng dẫn đo size trang sức</NavLink>
                            <NavLink to="/test1" className="nav-link ">Hướng dẫn mua hàng và thanh toán</NavLink>
                            <NavLink to="/jewelry-guide" className="nav-link ">Cẩm nang sử dụng trang sức</NavLink>
                        </Nav>
                        <h4>Phương thức thanh toán</h4>
                        <Link to="#"><i><img className="payment-icon" alt="img-mail" src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Circle.png" /></i></Link>
                        <Link to="#"><i><img className="payment-icon" alt="img-mail" src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png" /></i></Link>
                    </Col>
                    <Col>
                        <h4>Kết nối với chúng tôi</h4>
                        <p>Email: contact@trumkimcuong.com</p>
                        <p>Phone: +84 123 456 789</p>
                        <div className="social-icons">
                            <Link to="#"><i><img alt="img-fb" src="	https://cdn.pnj.io/images/image-update/footer/facebook.svg" /></i></Link>
                            <Link to="#"><i><img alt="img-ins" src="https://cdn.pnj.io/images/image-update/footer/instagram.svg" /></i></Link>
                            <Link to="#"><i><img alt="img-ytb" src="	https://cdn.pnj.io/images/image-update/footer/youtube.svg" /></i></Link>
                            <Link to="#"><i><img alt="img-mail" src="https://cdn.pnj.io/images/image-update/footer/email.svg" /></i></Link>
                        </div>
                        <h4>Chứng nhận</h4>
                        <Link to="#"><i><img
                            style={{ marginLeft: '16px', maxWidth: '130px', height: 'auto' }}
                            alt="img-mail"
                            src="https://cdn.pnj.io/images/image-update/op-da-thong-bao-bo-cong-thuong-183x60.png" /></i></Link>
                    </Col>
                </Row>

            </Container>

        </footer>
    );
}

export default Footer;
