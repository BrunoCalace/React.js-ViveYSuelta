import "./styles.css";
import Item from "./Item";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

function Items({products}){
    return (
        <div className="items-container">
            {products.map((data) => (
                <div className="card" key={data.id}>
                    <Link to={`/Detail/${data.id}`}>
                        <Item data={data} />
                    </Link>
                    <ItemCount stock={data.stock}/>
                    <button className="item-btn">Agregar al carrito</button>
                    <div className="item-stock">
                        <span>Stock: {data.stock}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Items;