import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { SiYoutubemusic } from "react-icons/si";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { BiUserCircle } from "react-icons/bi";

import "../Navbar/Navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">
          <img src="/foodfusion.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <center>
              <Nav.Link href="">
                <img className="pt-1" src="/healthy-fusion.png" alt="" />
              </Nav.Link>
            </center>
            <center>
              <Nav.Link href="">
                <img src="/kids.png" className="pt-2" alt="" />
              </Nav.Link>
            </center>
          </Nav>
          <Nav>
            <center>
              <Nav.Link className="" href="">
                <TiSocialFacebookCircular size={35} />
              </Nav.Link>
            </center>
            <center>
              <Nav.Link href="">
                <TiSocialTwitterCircular size={35} />
              </Nav.Link>
            </center>
            <center>
              <Nav.Link href="">
                <SiYoutubemusic className="pt-1" size={30} />
              </Nav.Link>
            </center>
            <center>
              <Nav.Link href="">
                <TiSocialInstagramCircular size={35} />
              </Nav.Link>
            </center>

            <Nav.Link className="d-flex flexwaliclass" href="#memes">
              <center>
                <BiUserCircle size={35} />
              </center>
              <center>
                <div>
                  <a className="a-class" href="">
                    LOGIN
                  </a>
                  <a className="a-class b-class" href="">
                    SIGNUP
                  </a>
                </div>
              </center>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
