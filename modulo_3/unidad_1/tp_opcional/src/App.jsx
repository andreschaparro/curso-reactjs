import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Public from './Routes/Public';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Public />
      </Router>
    </div>
  );
}

export default App;
