import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [dropdownVisible, setDropdownVisible] = useState({
        "Kim Cương": false,
        "Trang Sức Kim Cương": false,
        "Trang Sức Cưới": false
    });

    const toggleDropdown = (menu) => {
        setDropdownVisible((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__location">📍 Hệ Thống Cửa Hàng</div>
                <div className="header__account">
                    <span>Thông tin tài khoản</span>
                    <span className="header__wishlist">♡</span>
                    <span className="header__cart">🛒 0</span>
                </div>
            </div>
            <div className="header__center">
                <img src="/logo.png" alt="Thế Giới Kim Cương" className="header__logo-image" />
                <div className="header__logo-text">
                    <span className="header__logo-title">THẾ GIỚI KIM CƯƠNG</span>
                </div>
            </div>
            <div className="header__bottom">
                <nav className="header__nav">
                    <ul>
                        <li
                            onMouseEnter={() => toggleDropdown("Kim Cương")}
                            onMouseLeave={() => toggleDropdown("Kim Cương")}
                            className="dropdown"
                        >
                            Kim Cương
                            {dropdownVisible["Kim Cương"] && (
                                <ul className="dropdown-content">
                                    <li>Kim Cương Viên GIA</li>
                                    <li>Bảng Giá Kim Cương GIA</li>
                                    <li>Cẩm Nang Kim Cương</li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => toggleDropdown("Trang Sức Kim Cương")}
                            onMouseLeave={() => toggleDropdown("Trang Sức Kim Cương")}
                            className="dropdown"
                        >
                            Trang Sức Kim Cương
                            {dropdownVisible["Trang Sức Kim Cương"] && (
                                <ul className="dropdown-content">
                                    <li><img src="/icons/ring.png" alt="Nhẫn" /> Nhẫn</li>
                                    <li><img src="/icons/earrings.png" alt="Hoa Tai" /> Hoa Tai</li>
                                    <li><img src="/icons/necklace.png" alt="Mặt Dây" /> Mặt Dây</li>
                                    <li><img src="/icons/bracelet.png" alt="Lắc Tay" /> Lắc Tay</li>
                                    <li><img src="/icons/bangle.png" alt="Vòng Tay" /> Vòng Tay</li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => toggleDropdown("Trang Sức Cưới")}
                            onMouseLeave={() => toggleDropdown("Trang Sức Cưới")}
                            className="dropdown"
                        >
                            Trang Sức Cưới
                            {dropdownVisible["Trang Sức Cưới"] && (
                                <ul className="dropdown-content">
                                    <li>Nhẫn Cưới</li>
                                    <li>Nhẫn Đính Hôn</li>
                                </ul>
                            )}
                        </li>
                        <li>Bộ Sưu Tập</li>
                        <li>TS vàng 24K</li>
                        <li>Liên Hệ</li>
                        <li className="highlight">Khuyến Mãi</li>
                        <li>Tin Tức</li>
                    </ul>
                </nav>
                <div className="header__search">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <button type="submit">🔍</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
