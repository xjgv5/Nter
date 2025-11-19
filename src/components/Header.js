import React from 'react';

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
                    {isMenuOpen ? '✕' : '☰ '}
                </button>
            </div>

        </header>
    );
}

export default Header;