import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Header({ isMenuOpen, toggleMenu }) {
    return (
        <header className='header'>
            <div className="logo">
                <h1>Nter</h1>
            </div>

            <div className="header-content">
                <button
                    className="menu-toggle-btn"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>

        </header>
    );
}

export default Header;