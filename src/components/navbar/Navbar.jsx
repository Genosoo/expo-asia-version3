/* eslint-disable react/no-unescaped-entities */
import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import "./Navbar.css";
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';
function BasicExample() {
  const [showMenu1, setShowMenu1] = useState(false)
  const [showMenu2, setShowMenu2] = useState(false)
  const [showMenu3, setShowMenu3] = useState(false)


  const handleMenu1 = () => {
    setShowMenu1(!showMenu1);
    setShowMenu2(false)
    setShowMenu3(false)
    window.scroll(0, 0)

  };
  
  const handleMenu2 = () => {
    setShowMenu2(!showMenu2); 
    setShowMenu1(false)
    setShowMenu3(false)
    window.scroll(0, 0)
  };

  const handleMenu3 = () => {
    setShowMenu3(!showMenu3); 
    setShowMenu1(false)
    setShowMenu2(false)
    window.scroll(0, 0)
  };
  
  

  return (
   <div className='w-full sticky top-0 z-30 bg-white'>
       <Navbar expand="lg" >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className='logo'>
            <img src={logo} alt="logo" className='w-[150px]' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="navbarLinkBox">
            <Nav.Link as={NavLink} onClick={() => { window.scroll(0, 0) }}  to="" activeClassName="active">Home</Nav.Link>

         
            <Nav.Link as={NavLink} className='linkMenuBox' onClick={handleMenu1} to="/expo-asia/air-force-symposium" activeClassName="active">
              <span className=''> Air Force Symposium <FaAngleDown/></span>   
              {showMenu1 ? (
              <div className='linkMenu'>
                  <HashLink to="#speakers">Speakers</HashLink>
                  <HashLink to="#program">Program</HashLink>
                  <HashLink to="#online-streaming">Online Streaming</HashLink>
             </div>
            ):null}
            </Nav.Link>


            <Nav.Link as={NavLink} className='linkMenuBox' onClick={handleMenu2} to="/expo-asia/defense-suppliers-summit" activeClassName="active">
              <span className=''>Defense Suppliers Summit <FaAngleDown/></span>   
              {showMenu2 ? (
              <div className='linkMenu'>
                  <HashLink to="#speakers">Speakers</HashLink>
                  <HashLink to="#program">Program</HashLink>
                  <HashLink to="#online-streaming">Meetings</HashLink>
             </div>
            ):null}
            </Nav.Link>
          

            <Nav.Link as={NavLink} className='linkMenuBox' onClick={handleMenu3} to="/expo-asia/expo" activeClassName="active">
              <span className=''>Expo <FaAngleDown/></span>   
              {showMenu3 ? (
              <div className='linkMenu'>
                  <HashLink to="#speakers">Sponsors/Partners</HashLink>
                  <HashLink to="#visitors">Visitors</HashLink>
             </div>
            ):null}
            </Nav.Link>
          
     

            <Nav.Link  onClick={() => { window.scroll(0, 0) }}  as={NavLink} to="/expo-asia/contact-us" activeClassName="active">Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
}

export default BasicExample;
