import "./styles.css";
import {useEffect, useState} from 'react'
import Items from "./Items"
import Item from "./Item"

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('/src/mocks/data.json')
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

    console.log(products);

    return (
        <div className="item-list-container">
            <Items products={products} />
        </div>
    );
}

export default ItemListContainer;