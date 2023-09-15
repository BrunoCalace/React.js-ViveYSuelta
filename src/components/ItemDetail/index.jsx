import "./styles.css"
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount"


const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [selectedCant, setSelectedCant] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, selectedCant);
    };

    const handleItemCountChange = (newCant) => {
        setSelectedCant(newCant);
    };

    return (
        <>
            {product && (
                <div className="container-det">
                    <div className="details-container">
                        <div className="details-top">
                            <div className="details1">
                                <img className="img-details" src={product.img} alt="Foto producto" />
                            </div>
                            <div className="details2">
                                <h1 className="details-nom">{product.nom}</h1>
                                <p className="details-price">$ {product.precio}</p>
                                <ItemCount
                                    product={product}
                                    initialCant={selectedCant}
                                    onCantChange={handleItemCountChange}
                                />
                                <button className="details-btn" onClick={() => handleAddToCart(selectedCant)}>
                                    Agregar al carrito
                                </button>
                                <div className="details-stock">
                                    <span>Stock: {product.stock}</span>
                                </div>
                            </div>
                        </div>
                        <div className="details-bottom">
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ItemDetail;
