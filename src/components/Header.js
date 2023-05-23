import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from './Avatar';
import { basenameUrl } from '../const';

function Header() {
  return (
    <Navbar bg="light" expand="false">
      <Container>
        <Navbar.Brand href={basenameUrl}>Test Project Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link href={basenameUrl}>All Posts</Nav.Link>
                <Nav.Link href={`${basenameUrl}/about`}>About</Nav.Link>
            <Nav.Link href={`${basenameUrl}/about`}>
                <Avatar height={50} src={require("../images/avatar_about.jpg")} /> / Vlad Kotov / vokisskotov@gmail.com 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;