// Error404Psyduck.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export const Error404 = () => {
    return (
        <div className="error-404-psyduck">


            {/* Contenido principal */}
            <div className="error-container">
                {/* Icono de advertencia */}
                <div className="warning-icon">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>

                {/* Títulos */}
                <h1 className="error-number">404</h1>
                <h2 className="error-title">Página no encontrada</h2>

                <p className="error-message">
                    Psyduck está tan confundido que no puede encontrar la página que buscas.
                    ¡Su dolor de cabeza empeoró!
                </p>

                {/* Psyduck animado estilo primera generación */}
                <div class="canvas">
                    <div class="foot"></div>
                    <div class="foot" id="right"></div>
                    <div class="hair">
                    </div>
                    <div class="psyduck">
                        <div class="beak">
                            <div class="nostrils"></div>
                        </div>
                        <div class="blush"></div>
                        <div class="eyes"></div>
                    </div>
                    <div class="arm"></div>
                    <div class="right arm"></div>
                </div>

                {/* Botones de acción */}
                <div className="error-actions">
                    <button
                        className="error-btn secondary-btn"
                        onClick={() => window.history.back()}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span>Regresar</span>
                    </button>

                    <Link to="/" className="error-btn primary-btn">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Volver al inicio</span>
                    </Link>
                </div>

                {/* Mensaje adicional */}
                <div className="error-tip">
                    <p>Mientras Psyduck se recupera del dolor de cabeza, puedes:</p>
                    <ul>
                        <li>Verificar que la URL esté correcta</li>
                        <li>Usar la navegación del sitio</li>
                        <li>Contactar a soporte si el problema persiste</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Error404;