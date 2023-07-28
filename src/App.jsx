import "./App.css";
import  Navbar  from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"

function App() {
  return (
    <main>
        <Navbar />
        <ItemListContainer />
        <Footer/>
    </main>
  );
}

export default App;
