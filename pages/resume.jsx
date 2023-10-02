import React from "react";
import Link from "next/link";
import Image from "next/image";

const Resume = () => {
  return (
    <div className="resume-section">
      <div className="container">
        <div className="resume-title ">
          <h2 className="main-heading">Resumé</h2>
          <p>
            Reach out to me via my &nbsp;
            <b>
              <Link href="/contact">contact page</Link>
            </b>
            &nbsp;.&nbsp;
            <b>
              <Link href="assets/images/Resume2.pdf" target="_blank">
                view
              </Link>
            </b>
            &nbsp;or&nbsp;
            <b>
              <Link href="assets/images/Resume2.pdf" target="_blank" download>
                download
              </Link>
            </b>
            &nbsp; the resume
          </p>
        </div>
        <div className="resume-image">
          <Link href="/resume">
            <Image
              src="/assets/images/Resume.png"
              alt=""
              className="img-fluid"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="to-contact-page">
          <Link href="/contact">
            <p className="mb-4">
              Are you convinced to contact me now ?
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
