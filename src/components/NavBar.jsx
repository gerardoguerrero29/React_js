import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

function NavBar() {
    return <div className="flexible" >

        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="/home"> <img src="https://www.climatizacion-sustentable.com/wp-content/uploads/2019/02/logo-web-nueva.png" alt="LogoCS" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Inicio</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/category/:1">Categoria 1</NavDropdown.Item>
                            <NavDropdown.Item href="/category/:2">Categoria 2</NavDropdown.Item>
                            <NavDropdown.Item href="/category/:3">Categoria 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/item/:id">Item</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <CartWidget cantidad={7} />

    </div>;
}

export default NavBar;