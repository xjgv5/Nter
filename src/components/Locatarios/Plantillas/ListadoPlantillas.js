import Plantilla from './components/Plantilla'
import RegresarCabecera from '../../RegresarCabecera'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
export const ListadoPlantillas = () => {
    const titulo = "Plantillas"
    const ruta = "/crearBoleto"

    const listaPlantillas = localStorage.getItem("plantillas")
    const plantillas = listaPlantillas ? JSON.parse(listaPlantillas) : []

    return (
        <div className="plantillas-layout">
            <RegresarCabecera titulo={titulo} ruta={ruta} />
            <div className="menu-layout">
                <div className="subtitulo">Listado de plantillas</div>

                {plantillas.length === 0 ? (
                    <p>No hay plantillas guardadas</p>
                ) : (
                    plantillas.map((plantilla) => (
                        <Plantilla
                            key={plantilla.id}
                            listaPlantillas={plantilla}
                        />
                    ))
                )}
            </div>
            <div className="contenedor-botones">
                <Link to="/" className='boton-primario'>
                    <FontAwesomeIcon icon={faHouse} />
                    Inicio
                </Link>
            </div>
        </div>
    )
}

export default ListadoPlantillas