import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Productos from "./Components/Productos";
import Productores from "./Components/Productores";
import ProductorDetail from "./Components/ProductorDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Productos />} />
        <Route path="/productores" element={<Productores />} />
        <Route path="/productores/:productorId" element={<ProductorDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
