import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {

  
  return (
    <Navbar bg="light" expand="lg" id="home" className='navbar'>
      <Container>
        <Navbar.Brand href="#home" className='navbar-brand  ms-lg-0 ms-md-3 ms-2'>Portfolio <i class="bi bi-pc-display"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link className=' ms-lg-0 ms-md-3 ms-3' href="#abouts">About</Nav.Link>
            <Nav.Link className=' ms-lg-2 ms-md-3 ms-3' href="#portfolios">Portfolio</Nav.Link>
            <Nav.Link className=' ms-lg-2 ms-md-3 ms-3' href="#skills">Skills</Nav.Link>
            <Nav.Link className=' ms-lg-2 ms-md-3 ms-3' href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
