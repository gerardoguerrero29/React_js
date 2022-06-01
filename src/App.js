import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return <div>
    <NavBar />
    <ItemListContainer greeting={"Hola, soy un producto del carrito"} />

  </div>;

}

export default App
