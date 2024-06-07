import React, { useState } from 'react';
import '../../styles/Header.css';

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
                <div className="header__account">
                    <span className="header__account-info">Thông tin tài khoản</span>
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
                    <ul className="header__nav-list">
                        <li
                            onMouseEnter={() => toggleDropdown("Kim Cương")}
                            onMouseLeave={() => toggleDropdown("Kim Cương")}
                            className="header__nav-item dropdown"
                        >
                            Kim Cương
                            {dropdownVisible["Kim Cương"] && (
                                <ul className="dropdown__content">
                                    <li className="dropdown__item">Kim Cương Viên GIA</li>
                                    <li className="dropdown__item">Bảng Giá Kim Cương GIA</li>
                                    <li className="dropdown__item">Cẩm Nang Kim Cương</li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => toggleDropdown("Trang Sức Kim Cương")}
                            onMouseLeave={() => toggleDropdown("Trang Sức Kim Cương")}
                            className="header__nav-item dropdown"
                        >
                            Trang Sức Kim Cương
                            {dropdownVisible["Trang Sức Kim Cương"] && (
                                <ul className="dropdown__content">
                                    <li className="dropdown__item"><img src="/icons/ring.png" alt="Nhẫn" /> Nhẫn</li>
                                    <li className="dropdown__item"><img src="/icons/earrings.png" alt="Hoa Tai" /> Hoa Tai</li>
                                    <li className="dropdown__item"><img src="/icons/necklace.png" alt="Mặt Dây" /> Mặt Dây</li>
                                    <li className="dropdown__item"><img src="/icons/bracelet.png" alt="Lắc Tay" /> Lắc Tay</li>
                                    <li className="dropdown__item"><img src="/icons/bangle.png" alt="Vòng Tay" /> Vòng Tay</li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => toggleDropdown("Trang Sức Cưới")}
                            onMouseLeave={() => toggleDropdown("Trang Sức Cưới")}
                            className="header__nav-item dropdown"
                        >
                            Trang Sức Cưới
                            {dropdownVisible["Trang Sức Cưới"] && (
                                <ul className="dropdown__content">
                                    <li className="dropdown__item">Nhẫn Cưới</li>
                                    <li className="dropdown__item">Nhẫn Đính Hôn</li>
                                </ul>
                            )}
                        </li>
                        <li className="header__nav-item">Bộ Sưu Tập</li>
                        <li className="header__nav-item">TS vàng 24K</li>
                        <li className="header__nav-item">Liên Hệ</li>
                        <li className="header__nav-item header__nav-item--highlight">Khuyến Mãi</li>
                        <li className="header__nav-item">Tin Tức</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
