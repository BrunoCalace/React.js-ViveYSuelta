import "./styles.css";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ItemDetail from "../../components/ItemDetail";

const DetailPage = () => {
    const [prods, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    let { prodId } = useParams()
    const productId = parseInt(prodId);

    let fProd = prods.filter((prod) => {
        return prod.id === productId; 
    });

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
            <ItemDetail product={fProd[0]} />
            <Footer />
        </>
        
    );
};

export default DetailPage;