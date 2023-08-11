import "./styles.css"
import Item from "../Item"
import { Link } from "react-router-dom";

function Items({products}){
    return (
        <div className="items-container">
            {products.map((data) => (
                <Link className="card" key={data.id} to={`/Detail/${data.id}`}>
                    <Item data={data} />
                </Link>
            ))}
        </div>
    );
}

export default Items;