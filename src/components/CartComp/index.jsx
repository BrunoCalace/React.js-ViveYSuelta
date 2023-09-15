import "./styles.css";
import Swal from "sweetalert2";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartComp = ({ cartList }) => {
    const { deleteItem, removeList } = useContext(CartContext);
    const [cartUpdated, setCartUpdated] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setCartUpdated(!cartUpdated);

        const cartTotal = cartList.reduce((accumulator, product) => {
            return accumulator + product.precio * product.cant;
          }, 0);

          setTotal(cartTotal);
    }, [cartList]);

    const handleRemoveList = () => {
        removeList();

        Swal.fire({
            title: "¡Gracias por tu compra!",
            text: "El pedido se ha procesado correctamente.",
            icon: "success",
            confirmButtonColor: "rgb(248, 129, 129)",
            confirmButtonText: "Aceptar",
        });
    };

    if (!cartList || cartList.length === 0) {
        return (
            <div className="modal-content">
                <h1>No hay productos en el carrito.</h1>
                <Link className="li" to="/">Volver a la página de inicio</Link>
            </div>
        );
    }

    return (
        <>
            <div className="modal-content">
            {cartList.map((product) => (
                <div className="item" key={product.id}>
                    <img src={product.img} alt={product.nom} />
                    <h3>{product.nom}</h3>
                    <p>{product.cant}</p>
                    <p>$ {product.precio}</p>
                    <span className="delete-product" onClick={() => deleteItem(product.id)}>
                        <img src="/src/assets/icons/basura.png" alt="Eliminar" />
                    </span>
                </div>
            ))}
            </div>
            <div className="modal-footer">
                <h2>Total: $ {total}</h2>
                <Link className="li" to="/" onClick={handleRemoveList}>Comprar</Link>
            </div>
        </>
        
    );
};

export default CartComp;