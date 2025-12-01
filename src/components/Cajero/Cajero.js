import React from 'react';
import BotonEscanear from './components/BotonEscanear';
import Registros from './components/Registros';

function Cajero() {
    return (
        <div className="cajero-layout">
            <form action="" className='escanear-form'>
                {/* <FontAwesomeIcon icon={faCashRegister} className='escanear-icono' /> */}
                <p className='escanear-texto'>Ingresa el código del ticket o escanea con tu cámara</p>
                <input type="text" className='escanear-input' />

                <Registros />
                <BotonEscanear />
            </form>

        </div>
    );
}

export default Cajero;
