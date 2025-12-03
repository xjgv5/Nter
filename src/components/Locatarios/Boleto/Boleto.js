import React from 'react'
import { RegresarCabecera } from '../RegresarCabecera'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Boleto = () => {
    const datosFormulario = JSON.parse(localStorage.getItem('datosFormulario'));
    let { nombre, duracion, fecha, notas } = datosFormulario;
    console.log(datosFormulario);

    const compartirQR = async () => {
        // Obtener la imagen QR
        const qrImage = document.querySelector('.qr');

        try {
            const response = await fetch(qrImage.src);
            const blob = await response.blob();
            const file = new File([blob], `qr-${nombre}.png`, { type: 'image/png' });

            if (navigator.share && navigator.canShare) {
                try {
                    await navigator.share({
                        files: [file],
                        title: `Boleto para ${nombre}`,
                        text: `Boleto de invitación para ${nombre}. Duración: ${duracion}, Fecha: ${fecha}`
                    });
                } catch (error) {
                    console.log('Error al compartir:', error);
                    await navigator.share({
                        title: `Boleto para ${nombre}`,
                        text: `Boleto de invitación para ${nombre}. Duración: ${duracion}, Fecha: ${fecha}. Ver el QR en la aplicación.`
                    });
                }
            } else {
                descargarQR();
            }
        } catch (error) {
            console.error('Error al procesar la imagen:', error);
            descargarQR();
        }
    };

    const descargarQR = () => {
        const qrImage = document.querySelector('.qr');
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = `qr-${nombre}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='boleto-layout'>
            <RegresarCabecera titulo="Boleto" ruta="/crearBoleto" />
            <div className="menu-layout">
                <h3 className="subtitulo">BOLETO CREADO</h3>
                <div className="contenedor-qr">
                    <img src="./qr.png" alt="Código QR" className='qr' />
                </div>

                <button
                    className='boton-primario compartir'
                    onClick={compartirQR}
                >
                    <FontAwesomeIcon icon={faShareFromSquare} />
                    Compartir QR
                </button>

                <div className="info-boleto">
                    <p className='info-boleto-titulo'>Invitado:</p>
                    <p className='info-boleto-dato'>{nombre}</p>
                    <p className='info-boleto-titulo'>Duración:</p>
                    <p className='info-boleto-dato'>{duracion}</p>
                    <p className='info-boleto-titulo'>Fecha:</p>
                    <p className='info-boleto-dato'>{fecha}</p>
                    <p className='info-boleto-titulo'>Notas:</p>
                    <p className='info-boleto-dato'>{notas}</p>
                </div>


            </div>
        </div>
    )
}

export default Boleto