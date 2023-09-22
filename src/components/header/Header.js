import '../../styles/css/style.css';
import logo from '../../assets/images/logo/logo-header.svg';

import { useRef } from 'react';

export default function Header() {
    return (
        <header id="header-wrapper" className="wrapper">
            <div className="header container">
                <img  className="header__logo" src={logo} alt="Shortly Logo"/>
                <HeaderDesktopMenu/>
                <HeaderHamburgerMenu/>
            </div>
        </header>
    );
}

function HeaderDesktopMenu() {
    return (
        <>
        <nav>
            <menu className="header__menu">
                <li className="header__menu-item"><a href="#">Features</a></li>
                <li className="header__menu-item"><a href="#">Pricing</a></li>
                <li className="header__menu-item"><a href="#">Resources</a></li>
            </menu>
        </nav>
        <div className="header__user">
            <a href="#">Login</a>
            <a href="#" className="btn">Sign Up</a>
        </div>
        </>
    );
}

function HeaderHamburgerMenu() {
    const menuRef = useRef(null);

    const handleToggleMenu = () => {
        const menu = menuRef.current;

        if (menu.classList.contains('default'))  {
            menu.classList.remove('default');
            menu.classList.add('back-in-down');
        } else {
            menu.classList.contains('back-in-down') ? (
                menu.classList.replace('back-in-down', 'back-out-up')
            ) : (
                menu.classList.replace('back-out-up', 'back-in-down')
            );
        }
    }

    return (
        <>
        <label className="hamburger-toggle" htmlFor="toggle" title="menu">
            <input type="checkbox" id="toggle" onClick={handleToggleMenu}/>
        </label>
        <menu className="hamburger-menu default" ref={menuRef}>
                <li className="hamburger-menu__item"><a href="#">Features</a></li>
                <li className="hamburger-menu__item"><a href="#">Pricing</a></li>
                <li className="hamburger-menu__item"><a href="#">Resources</a></li>
                <hr/>
                <li className="hamburger-menu__item"><a href="#">Login</a></li>
                <li className="hamburger-menu__item"><a href="#" className="btn">Sign Up</a></li>
        </menu>
        </>
    );
}