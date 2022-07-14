import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailedContainer from "./components/ItemDetailedContainer";
import { pages } from "./components/Pages";
import TestEventos from "./components/TestEventos";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";
import { initializeApp } from "firebase/app";


function App() {

  initializeApp({
    apiKey: "AIzaSyB6Gyb3y3RHiYHR7al_prDgBIEOkeSdvmY",
    authDomain: "tienda-cs-gerardoguerrero.firebaseapp.com",
    projectId: "tienda-cs-gerardoguerrero",
    storageBucket: "tienda-cs-gerardoguerrero.appspot.com",
    messagingSenderId: "1016837784052",
    appId: "1:1016837784052:web:4d01d314ef42ecae3b79a1"
  });

  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar pages={pages} />
          <Routes>
            <Route path="/test" element={<TestEventos />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailedContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
