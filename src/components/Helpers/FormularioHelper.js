export const generarDatosQR = (datosFormulario, navigate) => {
    if (!datosFormulario.nombre || !datosFormulario.duracion || !datosFormulario.fecha) {
        throw new Error('Por favor, complete todos los campos requeridos');
    }

    console.log('Datos del formulario:', datosFormulario);

    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

    if (navigate) {
        navigate('/boleto');
    }

    return datosFormulario;
};

export const guardarPlantilla = (datosFormulario) => {
    const nuevaPlantilla = {
        id: Date.now(),
        ...datosFormulario,
        fechaCreacion: new Date().toISOString()
    };

    const plantillasExistentes = JSON.parse(localStorage.getItem('plantillas')) || [];
    const nuevasPlantillas = [...plantillasExistentes, nuevaPlantilla];
    localStorage.setItem('plantillas', JSON.stringify(nuevasPlantillas));

    console.log('Plantilla guardada:', nuevaPlantilla);
    console.log('Total de plantillas:', nuevasPlantillas.length);

    return nuevaPlantilla;
};

export const obtenerFechaActual = () => {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
};