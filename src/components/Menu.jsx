import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Menu.scss'
import '../styles/BurgerMenu.scss'

export const Menu = ({ type, onClick }) => {
    const menu = [
        { section: '/about', name: 'About' },
        { section: '/skills', name: 'Skills' },
        { section: '/cv', name: 'Cv' },
        { section: '/projects', name: 'Projects' },
    ]
    const menuItems = menu.map(item => (
        <li className={`${type}-item`} key={item.section}>
            <NavLink className={`${type}-link`} exact to={item.section} onClick={onClick}>
                {item.name}
            </NavLink>
        </li>
    ))
    return (
        <ul className={`${type}-items`}>
            {menuItems}
        </ul>
    )
}
