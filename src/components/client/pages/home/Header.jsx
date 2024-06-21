import React, { useState } from 'react';
import '../../styles/Header.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong"></link>

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
                <div className="header__account" >
                    <span className="header__account-info">Thông tin tài khoản</span>
                    <span className="header__cart">🛒 0</span>
                </div>
            </div>
            <div className="header__center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPedHYgEbswX5-OREJD1TKplrG2j_eyOqag&s" alt="header__logo" className="header__logo-image" />
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
                                    <li className="dropdown__item"><img src="//file.hstatic.net/1000381168/file/ic-6_a8cf702ba6b646a4bf9c7ef2e69ea3cd.png" alt="icon level 3" /> Nhẫn</li>
                                    <li className="dropdown__item"><img src="//file.hstatic.net/1000381168/file/ic-11_0b2efe255a95499fa470d3177eec91ab.png" alt="icon level 3" /> Hoa Tai</li>
                                    <li className="dropdown__item"><img src="https://file.hstatic.net/1000381168/file/mat-day-chuyen_e183174a263f447699d806d8ecc3cf25.png" alt="icon level 3" /> Mặt Dây</li>
                                    <li className="dropdown__item"><img src="https://file.hstatic.net/1000381168/file/day-lac-tay_38c9df8f6b3241219b648693d7231d2a.png" alt="icon level 3" /> Lắc Tay</li>
                                    <li className="dropdown__item"><img src="https://file.hstatic.net/1000381168/file/vong-tay_954bb2c1919c43d69bf24c97ff75fc0a.png" alt="icon level 3" /> Vòng Tay</li>
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
