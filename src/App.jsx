import "./App.css";
import  Navbar  from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <main className="main">
      <Navbar />
      <ItemListContainer Greeting="Hola Profe" />
    </main>
  );
}

export default App;
