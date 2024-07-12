import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong"></link>

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__account" >
                    <Link style={{ color: 'black' }} to={'/user/info'}><span className="header__account-info"><CiUser /> Tài Khoản của tôi</span></Link>

                    <Link style={{ color: 'black' }} to={'/cart'}><span className="header__cart">🛒 Giỏ hàng</span></Link>
                </div>
            </div>
            <div className="header__center">
                <Link to={"/"} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPedHYgEbswX5-OREJD1TKplrG2j_eyOqag&s" alt="header__logo" className="header__logo-image" />
                </Link>

                <div className="header__logo-text">
                    <Link to='/'>
                        <span className="header__logo-title">TRÙM KIM CƯƠNG</span>
                    </Link>
                </div>
            </div>
            <div className="header__bottom">
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
