import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap"

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="p-3 mb-2 bg-white text-dark">
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
                            <p>Lorem</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h4>Về Trùm Kim Cương</h4>
                            <NavLink href="#" className="text-black">Câu Chuyện</NavLink>
                            <NavLink href="#" className="text-black">Câu Chuyện2</NavLink>
                            <NavLink href="#" className="text-black">Câu Chuyện3</NavLink>
                            <NavLink href="#" className="text-black">Câu Chuyện4</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h4>Dịch vụ khách hàng</h4>
                            <NavLink href="#" className="text-black">Hướng dẫn đo size trang sức</NavLink>
                            <NavLink href="#" className="text-black">Mua hàng trả góp</NavLink>
                            <NavLink href="#" className="text-black">Hướng dẫn mua hàng và thanh toán</NavLink>
                            <NavLink href="#" className="text-black">Cẩm nang sử dụng trang sức</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Kết nối với chúng tôi</h4>
                        <p>email</p>
                        <p>phone</p>
                    </Col>
                </Row>
            </Container>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    TrumKimCuong
                </a>
            </div>
        </footer>
    )
}

export default Footer;