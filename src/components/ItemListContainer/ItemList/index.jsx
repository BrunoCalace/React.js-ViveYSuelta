import "./styles.css";
import Item from "./Item";
import ItemCount from "../../ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

function Items({products}){
    const { addToCart } = useContext(CartContext);
    const [selectedCant, setSelectedCant] = useState(1);

    const handleAddToCart = (product) => {
        addToCart(product, selectedCant);
    };

    const handleItemCountChange = (newCant) => {
        setSelectedCant(newCant);
    };

    return (
        <div className="items-container">
            {products.map((data) => (
                <div className="card" key={data.id}>
                    <Link to={`/Detail/${data.id}`}>
                        <Item data={data} />
                    </Link>
                    <ItemCount
                        product={data}
                        initialCant={selectedCant}
                        onCantChange={handleItemCountChange}
                    />
                    <button className="item-btn" onClick={() => handleAddToCart(data)}>
                        Agregar al carrito
                    </button>
                    <div className="item-stock">
                        <span>Stock: {data.stock}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Items;