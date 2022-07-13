import { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/CartContext";
import CartWidget from "./CartWidget";

function NavBar() {

    const { cartItemCount } = useContext(Context)
    const cartCount = cartItemCount();

    return <>

        <div className="flexible" >

            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home"> <img src="https://www.climatizacion-sustentable.com/wp-content/uploads/2019/02/logo-web-nueva.png" alt="LogoCS" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/category/termosuelo">Termosuelo</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/category/bombaDeCalor">Bomba de Calor</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/category/energiaSolar">Energia Solar</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {cartCount>0 && <CartWidget cantidad={cartCount} />}
        </div>
    </>
}

export default NavBar;