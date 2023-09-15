import "./styles.css";
import {useEffect, useState} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemList from "./ItemList/index";
import { RiseLoader } from "react-spinners";


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

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
        <div className="item-list-container">
            {showLoading ? (
                <div className="spinner-container">
                    <div>
                        <RiseLoader loading={showLoading} color="rgb(248,129,129)" size={45}  /> 
                    </div>
                </div>
            ) : (
                <ItemList products={products} />
            )
            }
        </div>
    );
}

export default ItemListContainer;