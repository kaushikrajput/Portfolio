import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setOpen(false);
  };

  const handleShow = () => setShow(true);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  });

  // const [active, setActive] = useState(false)

  // const [theme, setTheme] = useState("light-theme");

  // const toggleTheme = () => {
  //     if (theme === "dark-theme") {
  //         setTheme("light-theme");
  //     } else {
  //         setTheme("dark-theme");
  //     }
  // };

  // useEffect(() => {
  //     document.body.className = theme;
  // }, [theme]);
  const router = useRouter();

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
                <li className="nav-item">
                  <Link href="/resume" className="nav-link">
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu-style">
            <AnimatePresence wait>
              <motion.div
                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
                className="base-page-size"
              >
                <div className="hamburger-menu" onClick={handleShow}>
                  <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    color="#545454"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </nav>
      </header>

      <Offcanvas show={show} onClick={handleClose} scroll="true">
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="navbar-collapse ">
            <button className="close-nav" onClick={handleClose}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path>
              </svg>
            </button>
            <ul className="nav-list ml-auto">
              <li className="d-block nav-item hover-bottom">
                <Link href="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="d-block nav-item hover-bottom">
                <Link href="/about" className="nav-links ">
                  About
                </Link>
              </li>
              <li className="d-block nav-item hover-bottom">
                <Link href="/projects" className="nav-links ">
                  Projects
                </Link>
              </li>
              <li className="d-block nav-item hover-bottom">
                <Link href="/resume" className="nav-links ">
                  Resume
                </Link>
              </li>
              <li className="d-block nav-item hover-bottom">
                <Link href="/contact" className="nav-links ">
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
