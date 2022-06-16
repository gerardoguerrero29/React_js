import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

function NavBar() {
    return <div className="flexible" >

        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="home"> <img src="https://www.climatizacion-sustentable.com/wp-content/uploads/2019/02/logo-web-nueva.png" alt="LogoCS" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Inicio</Nav.Link>
                        <NavDropdown title="Productos y Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/action/3.1">Termosuelo</NavDropdown.Item>
                            <NavDropdown.Item href="/action/3.2">Climatizacion de Piscinas</NavDropdown.Item>
                            <NavDropdown.Item href="/action/3.3">Bomba de Calor</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/link">Proyectos</Nav.Link>
                        <Nav.Link href="/link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <CartWidget cantidad={7} />

    </div>;
}

export default NavBar;