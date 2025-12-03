import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Header({ isMenuOpen, toggleMenu }) {
    return (
        <header className='header'>
            <div className="logo">
                <img src="./logoNterBlanco.png" alt="" style={{ width: '170px' }} />
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