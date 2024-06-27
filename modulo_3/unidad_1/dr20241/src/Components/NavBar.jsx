import { Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown }  from 'react-bootstrap';

function NavBar(){
    // uso del componente Link para evitar recargar la pagina
    // as va en lugar de href para poder seguir usando el componente Link. No usar href
    return(
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
            <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
            <Nav.Link as={Link} to="/contador">Contador</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
        