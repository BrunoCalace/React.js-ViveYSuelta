import "./styles.css";
import cart from "../../../assets/icons/carrito.png";

function CartWidget () {
    return (
        <div className="btnCarritoNav">
            <img className="carrito"  src={cart} alt="carrito" />
            <p className="carritoNum">0</p>
        </div>
        
    );
}

export default CartWidget