import "./styles.css";
import ItemCount from "./ItemCount";

function Item({data}) {
    return (
        <div className="item">
            <img className="item-img" src={data.img}/>
            <h3 className="item-nom">{data.nom}</h3>
            <p className="item-price">$ {data.precio}</p>
            <ItemCount prods={data} />
            <button className="item-btn">Agregar al carrito</button>
            <div className="item-stock">
                <span>Stock: {data.stock}</span>
            </div>
        </div>
    );
}

export default Item;