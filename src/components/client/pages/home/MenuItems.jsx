import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    };

    const closeDropdown = () => {
        setDropdown(false);
    };

    const buildLink = (url) => {
        return url.startsWith('/') ? url : `/products/${url}`;
    };

    return (
        <li
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
        >
            {items.url && items.submenu ? (
                <>
                    <button
                        className='btn-menu'
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={toggleDropdown}
                    >
                        <div className="submenu__btn">
                            <Link to={buildLink(items.url)}>{items.title}</Link>
                            {depthLevel > 0 ? <span>&#62;</span> : <span className="arrow" />}
                        </div>
                    </button>
                    <Dropdown depthLevel={depthLevel + 1} submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <button
                        className='btn-menu'
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={toggleDropdown}
                    >
                        {items.title}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown depthLevel={depthLevel + 1} submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <Link to={buildLink(items.url)}>{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItems;
