import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { keywordText, menuText } from '../../data/header'

const Menu = () => {
    const location = useLocation();
    return (
        <nav className='header_menu'>
            <ul className='menu'>
                {menuText.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon} {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {keywordText.map((keyword, key) => (
                    <li key={key} className={decodeURIComponent(location.pathname) === decodeURIComponent(keyword.src) ? 'active' : ''}>
                        <Link to={keyword.src}>
                            {keyword.icon} {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu