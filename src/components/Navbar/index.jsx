import "./styles.css";
import icon from "../../assets/icons/icon.png";
import CartWidget from "../CartWidget";
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isResponsiveNav, setIsResponsiveNav] = useState(false);
    const navRef = useRef();

    const showNavbar = () => {
        setIsResponsiveNav(!isResponsiveNav);
    }

    const navClassName = isResponsiveNav ? "responsive_nav" : "nav";

    return(
        <nav className="navbar">
            <div className={navClassName} ref={navRef}>
                <ul className="nav-ul">
                    <Link className="li-icon" to="/"><img className="iconNav" src={icon} alt="icon"/></Link>
                    <Link className="li" to="/React.js-ViveYSuelta">Home</Link>
                    <Link className="li" to="/React.js-ViveYSuelta/Category/Bolsos">Bolsos</Link>
                    <Link className="li" to="/React.js-ViveYSuelta/Category/Carteras">Carteras</Link>
                    <Link className="li"to="/React.js-ViveYSuelta/Category/Cintos">Cintos</Link>
                    <Link className="li" to="/React.js-ViveYSuelta/Category/Mochilas">Mochilas</Link>
                    <Link className="li" to="/React.js-ViveYSuelta/Category/Calzado">Calzado</Link>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </ul>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            <Link className="btnCarrito" to="/Cart">
                <CartWidget />
            </Link>
        </nav>
    ); 
}

export default Navbar