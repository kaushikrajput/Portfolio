import React from "react";

const SocialLinks = () => {
  return (
    <>
      <div className="leftSide-style mediaq1">
        <ul className="social-style">
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
      </div>

      <div className="rightSide-style mediaq2">
        <div className="email-style">
          <a href="mailto:kaushikrajput0926@gmail.com">
            kaushikrajput0926@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
