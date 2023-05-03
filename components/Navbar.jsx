import React, { useEffect, useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setOpen(false)
    };

    const handleShow = () => setShow(true);

    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        AOS.init(
            { once: true }
        );

    })

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

    return (
        <>
            <header className="header ">
                <nav className="nav-style">
                    <div className='container d-flex justify-content-between'>
                        <div className="navbar-brand" >
                            <Link href="/" className='logo'>
                                <Image src="/assets/images/logo.png" alt='' className='img-fluid' width={500} height={500} />
                            </Link>
                        </div>
                        <div className="nav-items">
                            <ul className="nav-list ml-auto">
                                <li className='nav-item'>
                                    <Link href="/about" className='nav-link' data-aos="fade-down" data-aos-duration="1600" >About</Link>
                                </li>
                                <li className='nav-item' >
                                    <Link href="/projects" className='nav-link' data-aos="fade-down" data-aos-duration="1800">Projects</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href="/resume" className='nav-link' data-aos="fade-down" data-aos-duration="2000">Resume</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href="/contact" className='nav-link' data-aos="fade-down" data-aos-duration="2200">Contact</Link>
                                </li>
                                {/* <li className='nav-item'>
                                    <Link href="#" className='nav-link' data-aos="fade-down" data-aos-duration="2200" onClick={() => toggleTheme()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
                                        </svg>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className='menu-style'>
                        <div className='hamburger-menu' onClick={handleShow}>
                            <Hamburger toggled={isOpen} toggle={setOpen} direction='right' color='#545454' />
                        </div>
                    </div>
                </nav>
            </header>

            <Offcanvas show={show} onClick={handleClose} scroll='true'>
                <Offcanvas.Header >
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <div className='navbar-collapse '>
                        <button className='close-nav' onClick={handleClose}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path>
                            </svg>
                        </button>
                        <ul className='nav-list ml-auto'>
                            <li className='d-block nav-item hover-bottom'>
                                <Link href='/' className='nav-links'>Home</Link>
                            </li>
                            <li className='d-block nav-item hover-bottom' >
                                <Link href='/about' className='nav-links '>About</Link>
                            </li>
                            <li className='d-block nav-item hover-bottom'>
                                <Link href='/projects' className='nav-links '>Projects</Link>
                            </li>
                            <li className='d-block nav-item hover-bottom'>
                                <Link href='/resume' className='nav-links '>Resume</Link>
                            </li>
                            <li className='d-block nav-item hover-bottom'>
                                <Link href='/contact' className='nav-links '>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    )
}

export default Navbar