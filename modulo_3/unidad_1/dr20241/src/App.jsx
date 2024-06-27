import './App.css';
import NavBar from './Components/NavBar';
import Public from './Routes/Public';
// El BrowserRouter debe importarse con un alias llamado Router para mantener compatibilidad con codigo viejo
import {BrowserRouter as Router} from 'react-router-dom'
// esto se hace aca a diferencia del ejemplo de pagina de react bootstrap
import Container from 'react-bootstrap/Container'

function App() {
  // uso de react router
  // el container nos da un margen para todos los componentes Pages inyectados en Public
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <Public />
        </Container>
      </Router>
    </div>
  );
}

export default App;
