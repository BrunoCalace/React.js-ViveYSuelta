import "./styles.css";
import ItemCount from "../ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartComp = ({ cartList }) => {
    const { deleteItem, updateCartItem } = useContext(CartContext);

    const handleItemCountChange = (productId, newCant) => {
        updateCartItem(productId, newCant);
      };

    if (!cartList || cartList.length === 0) {
        return (
            <div className="modal-content">
                <h1>No hay productos en el carrito.</h1>
            </div>
        );
    }

    return (
        <div className="modal-content">
            {cartList.map((product) => (
                <div className="item" key={product.id}>
                    <img src={product.img} alt={product.nom} />
                    <h3>{product.nom}</h3>
                    <ItemCount
                        product={product}
                        initialCant={product.cant}
                        onCantChange={(newCant) => handleItemCountChange(product.id, newCant)}
                    />
                    <p>$ {product.precio}</p>
                    <span className="delete-product" onClick={() => deleteItem(product.id)}>
                        <img src="/src/assets/icons/basura.png" alt="Eliminar" />
                    </span>
                </div>
            ))};
        </div>
    );
};

export default CartComp;