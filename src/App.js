import ItemDetailedContainer from "./components/ItemDetailedContainer";
import NavBar from "./components/NavBar";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";


function App() {

  return <>
    <NavBar />
    <ItemDetailedContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>

}

export default App
