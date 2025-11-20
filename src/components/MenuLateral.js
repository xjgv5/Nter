import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

function MenuLateral({ isMenuOpen, toggleMenu }) {


    return (
        <>

            {isMenuOpen && (
                <div
                    className="menu-overlay"
                    onClick={toggleMenu}
                />
            )}


            <aside className={`side-menu ${isMenuOpen ? 'open' : 'closed'}`}>
                <nav className='navegacion'>
                    <ul className="nav-list">
                        <li className='nav-item'>
                            <FontAwesomeIcon className='icono' icon={faCashRegister} />
                            <NavLink

                                to="/cajero"
                                onClick={toggleMenu}
                            >
                                Cajero
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <FontAwesomeIcon className='icono' icon={faMoneyBill} />
                            <NavLink

                                to="/corte"
                                onClick={toggleMenu}
                            >
                                Corte de Caja
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <FontAwesomeIcon className='icono' icon={faChartLine} />
                            <NavLink

                                to="/dashboard"
                                onClick={toggleMenu}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <FontAwesomeIcon className='icono' icon={faFileLines} />
                            <NavLink
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