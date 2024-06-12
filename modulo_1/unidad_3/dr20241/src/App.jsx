import logo from "./logo.svg";
import "./App.css";
// Importo mi componente
import Home from './Home'

function App() {
  //Inyectar Home debajo de Hola Mundo con < />
  return <div className="App">
    Hola Mundo
    <Home />
  </div>;
}

export default App;