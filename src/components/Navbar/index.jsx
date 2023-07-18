import "./styles.css";
import icon from "../../assets/icons/icon.png";
import CartWidget from "./CartWidget";

function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav">
                <img className="iconNav" src={icon} alt="icon"/>
                <button className="btnNav">Home</button>
                <button className="btnNav">Bolsos</button>
                <button className="btnNav">Carteras</button>
                <button className="btnNav">Cintos</button>
                <button className="btnNav">Mochilas</button>
                <button className="btnNav">Calzado</button>
            </div>
            <div className="btnCarrito">
                <CartWidget />
            </div>
        </nav>
    ); 
}

export default Navbar