import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <a className="navbar-brand" href="#">
             <img src="./public/img/procrastination.png" width="30" height="30" alt="" />
           </a>
        <Navbar.Brand href="#">FreeMind</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/article">Articles</Nav.Link>
            
            <Nav.Link href="/feature" target='_self' >
              Features
            </Nav.Link>
            <Nav.Link href="./dashboard" target='_self' >
              Try Free
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            
          </Form> */}
          <Nav>
          <Nav.Link href="/about">AboutUs</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          {/* <Nav.Link href="#">Sign Up</Nav.Link> */}
          <Nav.Link href="/signin">Sign In</Nav.Link>
          <Nav.Link href="#action2"></Nav.Link>
          <img src="./public/img/person-circle.svg" width="30" height="30" alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;