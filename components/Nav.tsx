import {
  Button,
  Nav,
  Container,
  Form,
  FormControl,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Link from "next/link";
import navStyle from "../styles/Nav.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/">
              <a
                className={
                  router.pathname == "/" ? navStyle.active : navStyle.link
                }
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  router.pathname == "/about" ? navStyle.active : navStyle.link
                }
              >
                About
              </a>
            </Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
