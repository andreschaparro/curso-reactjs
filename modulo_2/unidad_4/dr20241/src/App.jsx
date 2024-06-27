import './App.css';
import NavBar from './Components/NavBar';
import Public from './Routes/Public';
// El BrowserRouter debe importarse con un alias llamado Router para mantener compatibilidad con codigo viejo
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  // uso de react router
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
