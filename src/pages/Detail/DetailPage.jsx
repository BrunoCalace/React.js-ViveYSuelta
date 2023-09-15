import "./styles.css";
import {useState, useEffect} from 'react';
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { RiseLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ItemDetail from "../../components/ItemDetail";

const DetailPage = () => {
    const [prods, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    const { prodId } = useParams();

    useEffect(() => {
        const getItems = async () => {
            try {
                const q = query(collection(db, "items"), where(documentId(), "==", prodId));
                const querySnapshot = await getDocs(q);
                const docs = [];

                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                
                setProducts(docs);
                setShowLoading(false);
            } catch (error) {
                console.error("Error fetching data", error);
                setShowLoading(false);
            }
        };
        getItems();
    }, []);
    
    const fProd = prods.find((prod) => prod.id === prodId);

    return (
        <>
            <Navbar />
            {showLoading ? (
                <div className="spinner-container">
                    <div>
                        <RiseLoader loading={showLoading} color="rgb(248,129,129)" size={45}  /> 
                    </div>
                </div>
            ) : fProd ? (
                <ItemDetail product={fProd} />
            ) : (
                <p>No se encontró el producto.</p>
            )}
            <Footer />
        </>
        
    );
};

export default DetailPage;