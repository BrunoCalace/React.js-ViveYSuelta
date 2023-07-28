import "./styles.css";
import {useEffect, useState} from 'react'
import Items from "./Items"
import Item from "./Item"

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('/src/mocks/data.json')
          .then((response) => response.json())
          .then((data) => {
            setTimeout(() => {
                setProducts(data)
                }, 2000)
            })

          .catch((error) => console.error('Error fetching data:', error));
      }, []);

    return (
        <div className="item-list-container">
            <Items products={products} />
        </div>
    );
}

export default ItemListContainer;