import "./styles.css";
import icon from "../../assets/icons/icon.png";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavOpen(prevState => !prevState);
    }
    /* const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.togle("resposive_nav");
    } */

    return(
        <nav className="navbar">
            <div className={`nav ${isNavOpen ? 'responsive_nav' : ''}`}>
                <ul className="nav-ul">
                    <Link className="li-icon" to="/"><img className="iconNav" src={icon} alt="icon"/></Link>
                    <Link className="li" to="/">Home</Link>
                    <Link className="li" to="/Category/Bolsos">Bolsos</Link>
                    <Link className="li" to="/Category/Carteras">Carteras</Link>
                    <Link className="li"to="/Category/Cintos">Cintos</Link>
                    <Link className="li" to="/Category/Mochilas">Mochilas</Link>
                    <Link className="li" to="/Category/Calzado">Calzado</Link>
                </ul>
            </div>
            <button className="nav-btn" onClick={toggleNavbar}>
                {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="btnCarrito">
                <CartWidget />
            </div>
        </nav>
    ); 
}

export default Navbar