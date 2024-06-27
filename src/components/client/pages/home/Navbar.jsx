import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import '../../styles/Navbar.css';
import axios from 'axios';

const Navbar = () => {
  const [menuItemsData, setMenuItemsData] = useState([]);

  const buildMenu = (records) => {
    return records.map(record => {
      const submenu = record.children && record.children.length > 0 ? buildMenu(record.children) : [];
      return {
        title: record.title,
        url: record.slug || '/', 
        submenu: submenu.length > 0 ? submenu : null,
      };
    });
  };

  const fetchData = () => {
    axios.get('/')
      .then(function (response) {
        const menuData = buildMenu(response.data.records);
        const staticCategories = [
          { title: 'Liên Hệ', url: '/contact' },
          { title: 'Khuyến Mãi', url: '/user/promotion' },
          { title: 'Tin Tức', url: '/news' }
        ];
        setMenuItemsData([...menuData, ...staticCategories]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => (
          <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
