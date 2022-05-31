import {useRef, useEffect, useState} from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

const App = () => 
{
  const navbarRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: '656296641044-f075f43qidorfspc1sm6095d4833bdjm.apps.googleusercontent.com',
        scope:''
      });
    }
      gapi.load('client:auth2', start);
      const onOutsideClick = (event) => 
      {
        if(navbarRef.current && !navbarRef.current.contains(event.target)) 
        {
          setExpanded(false);
        }
      }

      document.addEventListener("click", onOutsideClick);
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (<>
  <Navbar ref={navbarRef}
  expanded={expanded}
  onToggle={setExpanded}
  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<GoogleLogin
    clientId="556820517557-t0q4f7fo6khq4hqt5844dh4t7plus02s.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'http://localhost:3000'}
  />
  </>);
}

export default App;