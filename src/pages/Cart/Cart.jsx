import "./styles.css";
import CartComp from "../../components/CartComp";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cartList } = useContext(CartContext);

    return(
        <>
            <Navbar />
            <div className="cart-page">
                <div className="modal-container">
                    <div className="modal-header">
                        <h1>Tu carrito</h1>
                    </div>
                    <CartComp cartList={cartList} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;