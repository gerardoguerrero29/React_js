import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailedContainer from "./components/ItemDetailedContainer";
import { pages } from "./components/Pages";
import TestEventos from "./components/TestEventos";
import CartContext from "./context/CartContext";

function App() {
  return (
    <>
      <CartContext>
        <NavBar pages={pages} />
        <BrowserRouter>
          <Routes>
            <Route path="/test" element={<TestEventos />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailedContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
