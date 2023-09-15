import { useState, createContext, useEffect } from "react";
export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const[cartList, setCartList] = useState(() => {
        const localCartData = JSON.parse(localStorage.getItem("carrito")) || [];
        return localCartData;
    });

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cartList));
    }, [cartList]);

    const updateCartItem = (productId, newCant) => {
        const updatedCartList = cartList.map((product) => {
            if (product.id === productId) {
                return { product, cant: newCant };
            }
            return product;
        });

        setCartList(updatedCartList);
        saveLocal();
    };

    const addToCart = (product, selectedCant) => {
        const repeat = cartList.some((repeatProduct) => repeatProduct.id === product.id);
            
        if(repeat){
            
        }else{
            cartList.push({
                id: product.id,
                img: product.img,
                nom: product.nom,
                precio: product.precio,
                cant: selectedCant,
            });

            product.stock -= selectedCant;
        }
        saveLocal();
    }

    const carritoCounter = () => carrito.length;

    const removeList = () => {
        setCartList([]);
        saveLocal();
    }

    const deleteItem = (id) => {
        const updatedCartList = cartList.filter((element) => element.id !== id);
        setCartList(updatedCartList);
        saveLocal();
    }

    const saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(cartList));
    }

    return(
        <CartContext.Provider value={{cartList, updateCartItem, addToCart, removeList, deleteItem, carritoCounter}}>
            {children}
        </CartContext.Provider> 
        
    );
}

export default CartContextProvider;