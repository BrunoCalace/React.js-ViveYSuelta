import "./styles.css";
import cart from "../../assets/icons/carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget () {
    const { cartList } = useContext(CartContext);

    return (
        <div className="btnCarritoNav">
            <img className="carrito"  src={cart} alt="carrito" />
            <p className={`carritoNum ${cartList.length > 0 ? "visible" : "hidden"}`}>
                {cartList.length}
            </p>
        </div>
        
    );
}

export default CartWidget