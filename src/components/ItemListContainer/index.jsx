import "./styles.css";
import {useState} from 'react'

function ItemListContainer({Greeting}) {
    const [saludo, setSaludo] = useState(Greeting);

    function camGreet() {
        setSaludo("Apruebeme la pre-entegra 😁");
        //saludo = "Apruebeme la pre-entegra 😁";
    }

    return (
        <div className="itemListContainer">
            <p>{saludo}</p>
            <button onClick={camGreet}>Cambiar Mensaje</button>
        </div>
    );
}

export default ItemListContainer;