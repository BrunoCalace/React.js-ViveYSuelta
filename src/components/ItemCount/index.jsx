import React, { useState } from "react";
import "./styles.css"

function ItemCount ({ product, initialCant, onCantChange }) {
    const [selectedCant, setSelectedCant] = useState(initialCant);
    console.log(initialCant);
    
    const handleRestar = () => {
        if(selectedCant > 1)
        {
            setSelectedCant(selectedCant - 1);
            onCantChange(selectedCant - 1);
        }
    };

    const handleSumar = () => {
        if (selectedCant < product.stock) {
            setSelectedCant(selectedCant + 1);
            onCantChange(selectedCant + 1);
        }
    };

    return (
        <div className="item-count-container">
            <button className="res-btn" onClick={handleRestar}>-</button>
            <p>{selectedCant}</p>
            <button className="sum-btn" onClick={handleSumar}>+</button>

        </div>
    );
}

export default ItemCount;