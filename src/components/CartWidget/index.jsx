import "./styles.css";
import cart from "../../assets/icons/carrito.png";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget () {
    const { cartList } = useContext(CartContext);

    if (cartList.length === 0) {
        return null;
    }

    const totalUnitsInCart = cartList.reduce((total, product) => {
        return total + product.cant;
    }, 0);

    return (
        <div className="btnCarritoNav">
            <img className="carrito"  src={cart} alt="carrito" />
            <p className={`carritoNum ${cartList.length > 0 ? "visible" : "hidden"}`}>
                {totalUnitsInCart}
            </p>
        </div>
        
    );
}

export default CartWidget