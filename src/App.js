import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {

  const onAdd = (cantidad) => {
    alert(`agregaste al carrito ${cantidad} productos `);
  }
  return <div>
    <NavBar />
    <ItemCount stock={10} initial={1} onAdd={onAdd} />
    <ItemListContainer greeting={"Hola, soy un producto del carrito"} />
  </div>;

}

export default App
