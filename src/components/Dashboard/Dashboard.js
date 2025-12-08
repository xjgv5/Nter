import React from 'react';
import Grafica from './components/Grafica';
// import RegresarCabecera from '../RegresarCabecera';
function Dashboard() {
    const titulo = "Dashboard";
    const ruta = "/"
    return (
        <div className="dashboard-layout">
            <h3 className="titulo">{titulo}</h3>
            {/* <RegresarCabecera titulo={titulo} ruta={ruta} /> */}
            <div className="contenedorGrafica">
                <Grafica />
            </div>
        </div>
    );
}

export default Dashboard;