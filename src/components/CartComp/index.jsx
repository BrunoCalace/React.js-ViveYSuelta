import "./styles.css";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartComp = ({ cartList }) => {
    const { deleteItem, removeList } = useContext(CartContext);
    const [cartUpdated, setCartUpdated] = useState(false);
    const [total, setTotal] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
    });

    useEffect(() => {
        setCartUpdated(!cartUpdated);

        const cartTotal = cartList.reduce((accumulator, product) => {
            return accumulator + product.precio * product.cant;
          }, 0);

          setTotal(cartTotal);
    }, [cartList]);

    const addOrderToFirebase = async (formData, cartList, total) => {
        try {
          const orderData = {
            buyer: {
              name: formData.fullName,
              phone: formData.phone,
              email: formData.email,
            },
            items: cartList.map((product) => ({
              id: product.id,
              title: product.nom,
              price: product.precio,
            })),
            date: new Date().toISOString(),
            total: total,
          };
      
          const docRef = await addDoc(collection(db, "orders"), orderData);
          console.log("Order ID: ", docRef.id);
      
        } catch (error) {
          console.error("Error al agregar la orden a Firebase: ", error);
        }
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleRemoveList = () => {
        if (
            formData.fullName === "" ||
            formData.phone === "" ||
            formData.email === ""
          ) {
            Swal.fire({
              title: "¡Error!",
              text: "Por favor, complete todos los campos del formulario.",
              icon: "error",
              confirmButtonColor: "rgb(248, 129, 129)",
              confirmButtonText: "Aceptar",
            });
          } else {
            addOrderToFirebase(formData, cartList, total); // Agregar la orden a Firebase

            Swal.fire({
                title: "¡Gracias por tu compra!",
                text: "El pedido se ha procesado correctamente.",
                icon: "success",
                confirmButtonColor: "rgb(248, 129, 129)",
                confirmButtonText: "Aceptar",
            });

            removeList();
          }
    };

    if (!cartList || cartList.length === 0) {
        return (
            <div className="modal-content">
                <h1>No hay productos en el carrito.</h1>
                <Link className="li" to="/">Volver a la página de inicio</Link>
            </div>
        );
    }

    return (
        <>
            <div className="modal-content">
                {cartList.map((product) => (
                    <div className="item" key={product.id}>
                        <img src={product.img} alt={product.nom} />
                        <h3>{product.nom}</h3>
                        <p>{product.cant}</p>
                        <p>$ {product.precio}</p>
                        <span className="delete-product" onClick={() => deleteItem(product.id)}>
                            <img src="/src/assets/icons/basura.png" alt="Eliminar" />
                        </span>
                    </div>
                ))}
            </div>
            <div className="modal-footer">
                <h2>Total: $ {total}</h2>
            </div>
            <div className="checkout-form">
                <h2>Completa tus datos antes de comprar</h2>
                <form>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </form>
                <button onClick={handleRemoveList}>Completar compra</button>
            </div>
            
        </>
    );
};

export default CartComp;