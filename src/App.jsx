import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import DetailPage from "./pages/Detail/DetailPage"
import CategoryPage from "./pages/Category/CategoryPage";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:prodId" element={<DetailPage />} />
          <Route path="/Category/:catId" element={<CategoryPage />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
