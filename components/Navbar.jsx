import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setOpen(false);
  };

  const handleShow = () => setShow(true);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="header ">
        <nav className="nav-style">
          <div className="container d-flex justify-content-between">
            <div className="navbar-brand">
              <Link href="/" className="logo">
                <Image
                  src="/assets/images/logo.png"
                  alt=""
                  className="img-fluid"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className="nav-items">
              <ul className="nav-list ml-auto">
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link href="/resume" className="nav-link">
                    Resume
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu-style">
            <div className="hamburger-menu" onClick={handleShow}>
              <Hamburger toggled={isOpen} toggle={setOpen} color="#545454" size={25} direction="right" />
            </div>
          </div>
        </nav>
      </header>

      <Offcanvas show={show} onClick={handleClose} scroll="true" >
        
        <Offcanvas.Body >
            <button className="close-nav" onClick={handleClose}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path>
              </svg>
            </button>
          <div className="navbar-collapse ">
            <ul className="nav-list ml-auto  animate__animated animate__fadeIn">
              <li className="d-block nav-item hover-bottom ">
                <Link href="/" className="nav-links animate__delay-1s">
                  Home
                </Link>
              </li>
              <li className="d-block nav-item hover-bottom ">
                <Link href="/about" className="nav-links animate__delay-3s">
                  About
                </Link>
              </li>
              <li className="d-block nav-item hover-bottom ">
                <Link href="/projects" className="nav-links animate__delay-4s">
                  Projects
                </Link>
              </li>
              {/* <li className="d-block nav-item hover-bottom">
                <Link href="/resume" className="nav-links ">
                  Resume
                </Link>
              </li> */}
              <li className="d-block nav-item hover-bottom ">
                <Link href="/contact" className="nav-links animate__delay-5s">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
