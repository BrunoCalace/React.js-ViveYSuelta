import  Navbar  from "../../components/Navbar"
import ItemListContainer from "../../components/ItemListContainer"
import Footer from "../../components/Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <ItemListContainer />
            <Footer/>
        </div>
    );  
};

export default Home