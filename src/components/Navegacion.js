import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import Inicio from './Inicio';
import Cajero from './Cajero';
import Corte from './Corte';
import Dashboard from './Dashboard';
import Logs from './Logs';

function Navegacion() {
    return (
        <div className="navegacion-layout">
            <Router>
                <nav className='navegacion'>
                    <ul>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/cajero">Cajero</NavLink></li>
                        <li><NavLink to="/corte">Corte de Caja</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/logs">Logs</NavLink></li>

                    </ul>
                </nav>


                <div className="principal">
                    <Routes>
                        {/* <Route path="/" element={<Inicio />} /> */}
                        <Route path="/cajero" element={<Cajero />} />
                        <Route path="/corte" element={<Corte />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/logs" element={<Logs />} />
                    </Routes>
                </div>
            </Router>

        </div>
    );
}

export default Navegacion;