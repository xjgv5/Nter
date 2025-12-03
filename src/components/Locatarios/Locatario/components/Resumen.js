import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
function Resumen() {
    return (
        <div className='menu-layout'>
            <h2 className='subtitulo'>RESUMEN</h2>

            <div className="contenedor-resumen">
                <h3 className='elemento-menu t1'>Mi local</h3>

                <div className="fila">
                    <div className="contenedor-izquierda">
                        <div className="contenedor-imagen-perfil"><img src="/blank-profile-picture.webp" alt="" className='imagen-perfil' /></div>

                        <div className="contenedor-info">
                            <h3 className="elemento-menu">Patagonia</h3>
                            <p className='texto-secundario'>XXXXXXXXXXXX</p>
                        </div>
                    </div>

                    <div className="contenedor-derecha">
                        <NavLink to="/configuracion" >
                            <FontAwesomeIcon className='small icono-link' icon={faGear} />
                        </NavLink>

                    </div>
                </div>

                <div className="fila">
                    <div className="contenedor-izquierda">
                        <h3 className='elemento-menu'>Saldo disponible</h3>
                    </div>
                    <div className="contenedor-derecha">
                        <p className="texto-secundario-negro">$0.00</p>
                        <FontAwesomeIcon className='small icono-link chevron' icon={faChevronRight} />
                    </div>
                </div>

                <div className="fila">
                    <div className="contenedor-izquierda">
                        <h3 className='elemento-menu'>Boletos emitidos hoy</h3>
                        <p className='texto-secundario'>De 12:00 a 23:59</p>
                    </div>
                    <div className="contenedor-derecha">
                        <p className="texto-secundario-negro">8</p>
                        <FontAwesomeIcon className='small icono-link chevron' icon={faChevronRight} />
                    </div>
                </div>

                <div className="fila">
                    <div className="contenedor-izquierda">
                        <h3 className='elemento-menu'>Próximo vencimiento de pago</h3>
                    </div>
                    <div className="contenedor-derecha">
                        <p className="texto-secundario-negro">21/11/2025</p>
                        <FontAwesomeIcon className='small icono-link chevron' icon={faChevronRight} />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Resumen;