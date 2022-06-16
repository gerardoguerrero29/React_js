import NavBar from "./components/NavBar";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailedContainer from "./components/ItemDetailedContainer";


function App() {

  return <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailedContainer />} />
      </Routes>
    </BrowserRouter>
  </>

}

export default App
