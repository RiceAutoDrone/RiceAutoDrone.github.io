// Import css
import './Navbar.css';

// Import React module
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarAll = () => {
    return(
        <>
            <Navbar className="bg-body-tertiary" expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="d-inline-block align-top"
                             src="/img/logo.svg" alt=""
                             width="30" height="30"
                        />{' '} AutoDrone
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/settings">Settings</Nav.Link>
                            <Nav.Link href="/hardware">Hardware</Nav.Link>
                            <Nav.Link href="/firmware">Firmware</Nav.Link>
                            <Nav.Link href="/detection">Detection</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            {/*<NavDropdown title="Website" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">*/}
                            {/*    Another action*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item href="#action/3.4">*/}
                            {/*    Separated link*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarAll;