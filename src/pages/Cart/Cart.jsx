import "./styles.css";
import CartComp from "../../components/CartComp";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import React, { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cartList } = useContext(CartContext);
    const [cartUpdated, setCartUpdated] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setCartUpdated(!cartUpdated);

        const cartTotal = cartList.reduce((accumulator, product) => {
            return accumulator + product.precio * product.cant;
          }, 0);

          setTotal(cartTotal);
    }, [cartList]);

    return(
        <>
            <Navbar />
            <div className="cart-page">
                <div className="modal-container">
                    <div className="modal-header">
                        <h1>Tu carrito</h1>
                    </div>
                    <CartComp cartList={cartList} />
                    <div className="modal-footer">
                        <h2>Total: $ {total}</h2>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;