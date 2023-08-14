import "./styles.css";
import {useEffect, useState} from 'react';
import ItemList from "./ItemList/index";


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
                <ItemList products={products} />
            )
            }
        </div>
    );
}

export default ItemListContainer;