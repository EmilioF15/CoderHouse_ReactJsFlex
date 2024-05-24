import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListcontainer/ItemListcontainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<h4>Elemento No Encontrado</h4>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
