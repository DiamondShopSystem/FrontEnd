// import React from 'react';
// import '../../styles/Footer.css'; // Import the CSS file

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <h4 className="footer__title">Về Trùm Kim Cương</h4>
//             <ul className="footer__links">
//               <li><a href="#">Câu chuyện</a></li>
//               <li><a href="#">Tuyển dụng</a></li>
//               <li><a href="#">Xuất khẩu</a></li>
//               <li><a href="#">Kinh doanh sỉ</a></li>
//               <li><a href="#">Kiểm định kim cương</a></li>
//               <li><a href="#">Kinh doanh vàng miếng</a></li>
//             </ul>
//           </div>
//           <div className="col-md-4">
//             <h4 className="footer__title">Dịch vụ khách hàng</h4>
//             <ul className="footer__links">
//               <li><a href="#">Hướng dẫn đo size trang sức</a></li>
//               <li><a href="#">Mua hàng trả góp</a></li>
//               <li><a href="#">Hướng dẫn mua hàng và thanh toán</a></li>
//               <li><a href="#">Cẩm nang sử dụng trang sức</a></li>
//               <li><a href="#">Câu hỏi thường gặp</a></li>
//             </ul>
//           </div>
//           <div className="col-md-4">
//             <h4 className="footer__title">Kết nối với chúng tôi</h4>
//             <ul className="social__links">
//               <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
//               <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//               <li><a href="#"><i className="fab fa-youtube"></i></a></li>
//               <li><a href="#"><i className="far fa-envelope"></i></a></li>
//             </ul>
//             <h4 className="footer__title">Quan tâm Zalo</h4>
//             <p>Nhận các thông tin khuyến mãi hấp dẫn</p>
//             <a href="#" className="btn btn-primary">Quan tâm</a>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <hr className="footer__hr" />
//             <div className="footer__copyright">
//               <p>© 2023 PNJ. All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap"

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="p-3 mb-2 bg-white text-dark">
                    <Col className="mx-5">
                        <Stack>
                            <Image
                                src="data:image/jpeg;base64,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"
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