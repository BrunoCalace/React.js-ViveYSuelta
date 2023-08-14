import "./styles.css"
import ItemCount from "../ItemListContainer/ItemCount"

const ItemDetail = ({ product }) => {
    return (
        <>
            {product && (
                <div className="container-det">
                    <div className="details-container">
                        <div className="details-top">
                            <div className="details1">
                                <img className="img-details" src={product.img} alt="Foto producto" />
                            </div>
                            <div className="details2">
                                <h1 className="details-nom">{product.nom}</h1>
                                <p className="details-price">$ {product.precio}</p>
                                <ItemCount stock={product.stock} />
                                <button className="details-btn">Agregar al carrito</button>
                                <div className="details-stock">
                                    <span>Stock: {product.stock}</span>
                                </div>
                            </div>
                        </div>
                        <div className="details-bottom">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius voluptas cumque obcaecati corrupti delectus nemo sequi! At hic quod totam corporis itaque! Illo eveniet, soluta odit magni blanditiis recusandae? Blanditiis!</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ItemDetail;
