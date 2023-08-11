import "./styles.css";
import { useNavigate }  from "react-router-dom";
import { useEffect } from "react";

const Error = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 2000); 
    }, [navigate]);

    return (
        <div className="error-container">
            <h1>A ocurrido un problema... Redireccionando a Home</h1>
        </div>
    );
};

export default Error