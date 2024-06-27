import React, { useState } from 'react';
import '../../styles/Header.css';
import Navbar from './Navbar.jsx'
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong"></link>

const Header = () => {
    // const [dropdownVisible, setDropdownVisible] = useState({
    //     "Kim Cương": false,
    //     "Trang Sức Kim Cương": false,
    //     "Trang Sức Cưới": false
    // });

    // const toggleDropdown = (menu) => {
    //     setDropdownVisible((prevState) => ({
    //         ...prevState,
    //         [menu]: !prevState[menu],
    //     }));
    // };

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__account" >
                    <Link style={{color: 'black'}} to={'/user/info'}><span className="header__account-info">Thông tin tài khoản</span></Link>
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
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
