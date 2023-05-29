import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <h2
              className="main-heading"
              data-aos="fade-down"
              data-aos-duration="1400"
            >
              About Me{" "}
            </h2>
            <div className="col-lg-7">
              <div
                className="text-card skills"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <p>
                  Hi! My name is Kaushik and I’m doing my graduation in Computer
                  Science. I've enjoyed turning complex problems into simple,
                  beautiful and intuitive designs. I am a self-starter with
                  strong interpersonal skills. I work efficiently both as an
                  individual contributor as well as along with a team. I seek
                  new challenges and try to think out-of-the-box while looking
                  for creative solutions to a given problem.
                </p>

                {/* <p>Fan of movies, TV series and outdoor activites.</p> */}
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
                <ul className="skills-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="img-card"
                data-aos="fade-down"
                data-aos-duration="1400"
              >
                <Image
                  src="/assets/images/p2.jpg"
                  alt=""
                  className="img-fluid imgs"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-5">
              I am a self-starter with strong interpersonal skills. I work
              efficiently both as an individual contributor as well as along
              with a team. I seek new challenges and try to think out-of-the-box
              while looking for creative solutions to a given problem.
            </div>
            <div className="col-md-7">
              I am a self-starter with strong interpersonal skills. I work
              efficiently both as an individual contributor as well as along
              with a team. I seek new challenges and try to think out-of-the-box
              while looking for creative solutions to a given problem.
            </div>
          </div> */}
          <div className="to-work-page">
            <Link href="/projects">
              <p className=" mb-5 mt-5">
                Lets Go To My Projects.
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                </svg>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
