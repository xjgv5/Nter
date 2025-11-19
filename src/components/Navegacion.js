import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'


import MenuLateral from './MenuLateral'

const Navegacion = ({ isMenuOpen, toggleMenu }) => {



    return (
        <div className="navegacion-layout">
            <Router>
                <MenuLateral isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                <Principal />
            </Router>
        </div>
    )
}

export default Navegacion
