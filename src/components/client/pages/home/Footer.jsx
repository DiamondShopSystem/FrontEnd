import React from 'react';
import '../../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <div className="about-logo">
                        <img src="https://vinagems.vn/images/upload/images/kim-cuong-.jpg" alt="Logo" />
                        <div>
                            <h3>VỀ TRÙM KIM CƯƠNG</h3>
                            <p>Trùm Kim Cương hướng đến mục tiêu trở thành thương hiệu kim cương và trang sức uy tín nhất Việt Nam.</p>
                        </div>
                    </div>
                </div>
                <div className="footer-section quick-links">
                    <h3>Dịch Vụ </h3>
                    <ul>
                        <li><a href="#">Hướng Dẫn Đo Size Nhẫn</a></li>
                        <li><a href="#">Kiến Thức Kim Cương</a></li>
                        <li><a href="#">Giao Hàng Tận Nơi</a></li>
                        <li><a href="#">Hướng Dẫn Mua Hàng</a></li>
                        <li><a href="#">Phương Thức Thanh Toán</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Liên Hệ </h3>
                    <p>info@fptuniversity.com</p>
                    <p>FPT University Ho Chi Minh.</p>
                    <p>+1 246-345-0699</p>
                    <p>+1 246-345-0695</p>
                </div>
                <div className="footer-section follow-us">
                    <h3>Theo Dõi</h3>
                    <ul className="social-links">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                    </ul>
                    <div className="subscribe">
                        <input type="email" placeholder="Nhập email" />
                        <button type="submit">Gửi</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
