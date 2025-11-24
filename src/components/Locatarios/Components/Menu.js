import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    return (
        <div className='menu-layout'>
            <h2 className='subtitulo'>MENÚ</h2>

            <div className="fila">
                <Link to="/boletos-invitaciones" className="contenedor-izquierda link">
                    <FontAwesomeIcon className='small icono-link' icon={faTicket} />
                    <h3 className='elemento-menu'>Boletos e invitaciones</h3>
                </Link>
                <div className="contenedor-derecha">
                    <FontAwesomeIcon className='small icono-link chevron' icon={faChevronRight} />
                </div>
            </div>

            <div className="fila">
                <div className="contenedor-izquierda">
                    <FontAwesomeIcon className='small icono-link' icon={faMoneyCheckDollar} />
                    <h3 className='elemento-menu'>Pagos y facturación</h3>
                </div>
                <div className="contenedor-derecha">
                    <FontAwesomeIcon className='small icono-link chevron' icon={faChevronRight} />
                </div>
            </div>

            <div className="fila">
                <div className="contenedor-izquierda">
                    <FontAwesomeIcon className='small icono-link' icon={faChartLine} />
                    <h3 className='elemento-menu'>Reportes y analíticas</h3>
                </div>
                <div className="contenedor-derecha">
                    <FontAwesomeIcon className='small icono-link chevron' icon={faChevronRight} />
                </div>
            </div>

            <div className="fila">
                <div className="contenedor-izquierda">
                    <FontAwesomeIcon className='small icono-link' icon={faUsers} />
                    <h3 className='elemento-menu'>Usuarios y roles</h3>
                </div>
                <div className="contenedor-derecha">
                    <FontAwesomeIcon className='small icono-link chevron' icon={faChevronRight} />
                </div>
            </div>

            <div className="fila">
                <div className="contenedor-izquierda">
                    <FontAwesomeIcon className='small icono-link' icon={faUser} />
                    <h3 className='elemento-menu'>Mi perfil</h3>
                </div>
                <div className="contenedor-derecha">
                    <FontAwesomeIcon className='small icono-link chevron' icon={faChevronRight} />
                </div>
            </div>


        </div>
    );
}

export default Menu;