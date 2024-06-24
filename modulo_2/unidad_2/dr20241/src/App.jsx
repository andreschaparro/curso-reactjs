import './App.css';
import Home from './Components/Home';
import Contador from './Components/Contador';

function App() {
  return (
    <div className="App">
      <Contador />
      <p>---------------------------------------------------------------------</p>
      <Home />
    </div>
  );
}

export default App;
