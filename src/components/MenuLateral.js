import React from 'react';
import { NavLink } from 'react-router-dom';
import { ActivarClase } from './Helpers/ActivarClase';

function MenuLateral({ isMenuOpen, toggleMenu }) {


    return (
        <>
            {/* Overlay que cubre toda la pantalla cuando el menú está abierto */}
            {isMenuOpen && (
                <div
                    className="menu-overlay"
                    onClick={toggleMenu} // Cierra el menú al hacer clic fuera
                />
            )}

            {/* Menú lateral */}
            <aside className={`side-menu ${isMenuOpen ? 'open' : 'closed'}`}>
                <nav className='navegacion'>
                    <ul className="nav-list">
                        <li>
                            <NavLink
                                className={ActivarClase}
                                to="/cajero"
                                onClick={toggleMenu} // Cierra al seleccionar
                            >
                                Cajero
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={ActivarClase}
                                to="/corte"
                                onClick={toggleMenu}
                            >
                                Corte de Caja
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={ActivarClase}
                                to="/dashboard"
                                onClick={toggleMenu}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={ActivarClase}
                                to="/logs"
                                onClick={toggleMenu}
                            >
                                Logs
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default MenuLateral;