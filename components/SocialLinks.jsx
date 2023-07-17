import React from "react";

const SocialLinks = () => {
  return (
    <>
      <div className="leftSide-style mediaq1 ">
        <ul className="social-icon">
          <li>
            <a
              href="https://github.com/kaushikrajput"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_imkaushik/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kaushik-rajput-5b0bab211/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/kaushik.rajput.332/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
        </ul>
        <span className="stick animate__animated animate__fadeInUpBig"></span>
      </div>

      <div className="rightSide-style mediaq2">
        <div className="email-style hov">
          <a href="mailto:kaushikrajput0926@gmail.com">
            kaushikrajput0926@gmail.com
          </a>
        </div>
        <span className="stick animate__animated animate__fadeInUpBig"></span>
      </div>
    </>
  );
};

export default SocialLinks;
