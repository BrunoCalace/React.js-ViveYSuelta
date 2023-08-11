import "./styles.css";
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Items from "./Items";


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    
    useEffect(() => {
        getProducts(); 
      }, []);

    const getProducts = async () => {
        try{
            const response = await fetch('/src/mocks/data.json');
            if(!response.ok) {
                throw new Error("Algo anduvo mal...");
            }
            const data = await response.json();
            setProducts(data);
            setTimeout(() => setShowLoading(false), 2000);
        } catch (error) {
            console.error("Error fetching data", error);
            setShowLoading(false);
        }
    };

    return (
        <div className="item-list-container">
            {showLoading ? (
                <h1>Loading...</h1>
            ) : (
                <Items products={products} />
            )
            }
        </div>
    );
}

export default ItemListContainer;