import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

function NavBar({pages}) {
    return <div className="flexible" >

        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="/home"> <img src="https://www.climatizacion-sustentable.com/wp-content/uploads/2019/02/logo-web-nueva.png" alt="LogoCS" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Inicio</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/category/termosuelo">Termosuelo</NavDropdown.Item>
                            <NavDropdown.Item href="/category/bombaDeCalor">Bomba de Calor</NavDropdown.Item>
                            <NavDropdown.Item href="/category/energiaSolar">Energia Solar</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <CartWidget cantidad={7} />

    </div>;
}

export default NavBar;