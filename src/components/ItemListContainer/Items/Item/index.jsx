import "./styles.css";

function Item({data}) {
    return (
        <div className="item">
            <img className="item-img" src={data.img}/>
            <h3 className="item-nom">{data.nom}</h3>
            <p className="item-price">$ {data.precio}</p>
        </div>
    );
}

export default Item;