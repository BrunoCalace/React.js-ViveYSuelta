import "./styles.css";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Items from '../../components/ItemListContainer/Items';
import ItemCount from '../../components/ItemListContainer/Item/ItemCount';

const DetailPage = () => {
    const [prods, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    let { prodId } = useParams()
    const productId = parseInt(prodId);

    let fProd = prods.filter((prod) => {
        return prod.id === productId; 
    });

    console.log(fProd);

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
        <>
            <Navbar />
            {fProd.length > 0 && (
                <div className="details-container">
                    <div className="details-top">
                        <div className="details1">
                            <img className="img-details" src={fProd[0].img} alt="Foto producto" />
                        </div>
                        <div className="details2">
                            <h1 className="details-nom">{fProd[0].nom}</h1>
                            <p className="details-price">{fProd[0].precio}</p>
                            <ItemCount prods={fProd[0]} />
                            <button className="details-btn">Agregar al carrito</button>
                            <div className="details-stock">
                                <span>Stock: {fProd[0].stock}</span>
                            </div>
                        </div>
                    </div>
                    <div className="details-bottom">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius voluptas cumque obcaecati corrupti delectus nemo sequi! At hic quod totam corporis itaque! Illo eveniet, soluta odit magni blanditiis recusandae? Blanditiis!</p>
                    </div>
                </div>
            )}
            <Footer />
        </>
        
    );
};

export default DetailPage;