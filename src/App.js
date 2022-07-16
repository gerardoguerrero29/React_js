import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import ItemDetailedContainer from "./components/ItemDetailedContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { pages } from "./components/Pages";
import Test from "./components/Test";
import CartContext from "./context/CartContext";


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
            <Route path="/test" element={<Test/>} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailedContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
