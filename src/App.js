import ItemCount from "./components/ItemCount";
import ItemDetailedContainer from "./components/ItemDetailedContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return <>
    <NavBar />
    <ItemListContainer greeting={"Hola, soy un producto del carrito"} />
    <ItemDetailedContainer />
  </>

}

export default App
