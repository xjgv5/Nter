import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import Principal from './components/Principal';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="Layout">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="main-content">
          <MenuLateral isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Principal />
        </div>
      </div>
    </Router>
  );
}

export default App;