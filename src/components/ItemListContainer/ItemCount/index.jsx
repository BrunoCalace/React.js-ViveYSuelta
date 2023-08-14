import React, {useState} from 'react';
import "./styles.css"

function ItemCount ({ stock }) {
    const [cant, setCant] = useState(1);

    const handleRestar = () => {
        if(cant > 1)
        {
            setCant((prevCant) => prevCant - 1)
        }
    };

    const handleSumar = () => {
        if (cant < stock) {
          setCant((prevCant) => prevCant + 1);
        }
    };

    return (
        <div className="item-count-container">
            <button className="res-btn" onClick={handleRestar}>-</button>
            <span>{cant}</span>
            <button className="sum-btn" onClick={handleSumar}>+</button>

        </div>
    );
}

export default ItemCount;