import "./styles.css"
import Navbar from "../../components/Navbar";
import ItemList from "../../components/ItemListContainer/ItemList";
import Footer from "../../components/Footer";
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