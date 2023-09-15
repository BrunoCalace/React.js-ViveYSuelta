import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart"
import Error from "./pages/Error/Error";
import DetailPage from "./pages/Detail/DetailPage"
import CategoryPage from "./pages/Category/CategoryPage";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <main>
      <CartContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Detail/:prodId" element={<DetailPage />} />
            <Route path="/Category/:catId" element={<CategoryPage />}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </main>
  );
}

export default App;
