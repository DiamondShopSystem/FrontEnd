
import React, { useState } from 'react';
import {
    FaBars,
} from "react-icons/fa";
import {
    RiDashboardFill, RiAccountBoxFill,
    RiVipDiamondLine } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "admin/dashboard",
            name: "Dashboard",
            dashboard_icon: <RiDashboardFill />
        },
        {
            path: "admin/accounts",
            name: "Account",
            dashboard_icon: <RiAccountBoxFill />
        },
        {
            path: "admin/products",
            name: "Products",
            dashboard_icon: <RiVipDiamondLine />
        },
        {
            path: "admin/category",
            name: "Category",
            dashboard_icon: <MdCategory />
        },
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "300px" : "80px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="dashboard_icon">{item.dashboard_icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
