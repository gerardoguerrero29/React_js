import logo from './logo.svg';
import './App.css';
import Saludar from './components/saludar';

function App() {
  return (
   <div>
     <Saludar quien={"picho"} msj={"hola, como estas mi"}/>
   </div>
  );
}

export default App;
