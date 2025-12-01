export const eliminarPlantilla = (id) => {
    try {
        const plantillasExistentes = JSON.parse(localStorage.getItem('plantillas')) || [];

        const nuevasPlantillas = plantillasExistentes.filter(
            plantilla => plantilla.id !== id
        );

        localStorage.setItem('plantillas', JSON.stringify(nuevasPlantillas));

        console.log(`Plantilla ${id} eliminada`);
        console.log('Plantillas restantes:', nuevasPlantillas.length);

        return nuevasPlantillas;
    } catch (error) {
        console.error('Error al eliminar plantilla:', error);
        throw new Error('No se pudo eliminar la plantilla');
    }
};

export const cargarPlantillas = () => {
    try {
        const plantillas = localStorage.getItem('plantillas');
        return plantillas ? JSON.parse(plantillas) : [];
    } catch (error) {
        console.error('Error al cargar plantillas:', error);
        return [];
    }
};