import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  
  const onAdd=()=>{
      alert('se agrego al carrito')
    }
  
  return <div>
  
    <NavBar />
    <ItemListContainer greeting={"Hola, soy un producto del carrito"} />
    <ItemCount stock={10} initial={1} onAdd />
  </div>;

}

export default App
