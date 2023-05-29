import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import { projectsDATA } from "../components/ProjectData";

const Projects = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const uniqueId=()=>{
    
  }

  return (
    <>
      <section className="work-section " id="work">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <h2
                className="main-heading"
                data-aos="fade-down"
                data-aos-duration="1600"
              >
                Projects
              </h2>
            </div>
            <div className="card-section">
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Body>
                  <div className="sidebar-top">
                    <button className="closebutton" onClick={handleClose}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="#8F9BB3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M14.0055 7.835L10.1255 11.715L14.0055 15.595C14.098 15.6876 14.1715 15.7975 14.2216 15.9185C14.2717 16.0394 14.2975 16.1691 14.2975 16.3C14.2975 16.4309 14.2717 16.5606 14.2216 16.6815C14.1715 16.8025 14.098 16.9124 14.0055 17.005C13.9129 17.0976 13.803 17.171 13.682 17.2211C13.561 17.2712 13.4314 17.297 13.3005 17.297C13.1695 17.297 13.0399 17.2712 12.9189 17.2211C12.798 17.171 12.688 17.0976 12.5955 17.005L8.00546 12.415C7.91276 12.3225 7.83921 12.2126 7.78903 12.0916C7.73885 11.9707 7.71302 11.841 7.71302 11.71C7.71302 11.579 7.73885 11.4494 7.78903 11.3284C7.83921 11.2074 7.91276 11.0975 8.00546 11.005L12.5955 6.415C12.688 6.3223 12.7979 6.24875 12.9188 6.19857C13.0398 6.14839 13.1695 6.12256 13.3005 6.12256C13.4314 6.12256 13.5611 6.14839 13.6821 6.19857C13.8031 6.24875 13.913 6.3223 14.0055 6.415C14.3855 6.805 14.3955 7.445 14.0055 7.835Z"
                          fill="#8F9BB3"
                        ></path>
                      </svg>
                    </button>
                    <a
                      href="#"
                      className="back-to-projects"
                      onClick={handleClose}
                    >
                      Back to Projects.
                    </a>
                  </div>
                  <div className="main-post">
                    {projectsDATA.map((item) => (
                      <h3 key={item.id}>{item.title}</h3>
                    ))}
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
              <a
                onClick={handleShow}
                target="_blank"
                rel="noreferrer"
                className="card-style"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Image
                  src="/assets/images/project5.jpeg"
                  className="img-style img-fluid"
                  alt=""
                  width={500}
                  height={500}
                />
              </a>
              <a
                onClick={handleShow}
                target="_blank"
                rel="noreferrer"
                className="card-style"
                data-aos="fade-down"
                data-aos-duration="1400"
                data-aos-once="true"
              >
                <Image
                  src="/assets/images/project.jpeg"
                  className="img-style img-fluid"
                  alt=""
                  width={500}
                  height={500}
                />
              </a>
              <a
                onClick={handleShow}
                target="_blank"
                rel="noreferrer"
                className="card-style"
                data-aos="fade-down"
                data-aos-duration="1400"
                data-aos-once="true"
              >
                <Image
                  src="/assets/images/project2.png"
                  className="img-style img-fluid"
                  alt=""
                  width={500}
                  height={500}
                />
              </a>
              <a
                onClick={handleShow}
                target="_blank"
                rel="noreferrer"
                className="card-style"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Image
                  src="/assets/images/project4.png"
                  className="img-style img-fluid"
                  alt=""
                  width={500}
                  height={500}
                />
              </a>
              <a
                onClick={handleShow}
                target="_blank"
                rel="noreferrer"
                className="card-style"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Image
                  src="/assets/images/weather-Image.jpeg"
                  className="img-style img-fluid"
                  alt=""
                  width={500}
                  height={500}
                />
              </a>
            </div>

            <div className="to-resume-page">
              <Link href="/resume">
                <p className="mt-3">
                  Lets Go To My Resume.
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*<div className='col-lg-5 '>
    <div className='project-content'>
      <p className='project-overline'>Featured Project</p>
      <div className='project-description'>
        <p>I've built this Multi-page digital agency website using react. In this project I've used react-routing, reusable-components, hooks, axios api etc.</p>
      </div>
      <ul className='project-tech-list'>
        <li>React</li>
        <li>Module CSS</li>
        <li>Bootstrap</li>
        <li>Axios API</li>
      </ul>
      <div className='project-links'>
        <a href="https://github.com/kaushikrajput/skinfotechiess" aria-label="GitHub" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://skinfotechies.netlify.app/" aria-label="GitHub" target="_blank" rel="noreferrer">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  </div>*/}
    </>
  );
};

export default Projects;
