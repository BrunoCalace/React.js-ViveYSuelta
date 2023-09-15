import "./styles.css"
import Navbar from "../../components/Navbar";
import ItemList from "../../components/ItemListContainer/ItemList";
import Footer from "../../components/Footer";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiseLoader } from "react-spinners";

const CategoryPage = () => {
    const [prods, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    let { catId } = useParams()

    let filteredProds = prods.filter((prod) => {
        return prod.cat === catId; 
    });

    useEffect(() => {
        const getItems = async () => {
            try {
                const q = query(collection(db, "items"));
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

    return (
        <>
            <Navbar />
            <div className="item-list-container">
                {showLoading ? (
                    <div className="spinner-container">
                        <div>
                            <RiseLoader loading={showLoading} color="rgb(248,129,129)" size={45}  /> 
                        </div>
                    </div>
                ) : (
                    <ItemList products={filteredProds} />
                )
                }
            </div>
            <Footer />
        </>
        
    );
};

export default CategoryPage;