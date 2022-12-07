import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

const Header = () => {
  const getdata = useSelector((state)=>state.cartreducer.carts)
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <i className="fa-solid fa-bars text-light"></i>
          <Navbar.Brand href="#home"> </Navbar.Brand>
          <Navbar.Brand href="#home">TIOBU </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>

          <i className="fa-regular fa-circle-user text-light" style={{fontSize: 25, cursor:"pointer"}}></i>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
