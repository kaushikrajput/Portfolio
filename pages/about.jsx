import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-me">
            <div className="row align-items-center justify-content-center">
              <h2 className="main-heading">About Me</h2>
              <div className="col-lg-7 order1">
                <div className="text-card skills">
                  <p>
                    Hi! I'm Kaushik and I'm pursuing Master's degree in
                    Computer Application. I've enjoyed turning complex problems
                    into simple, beautiful and intuitive designs. I possesss
                    strong interpersonal skills and I am self motivated. I work
                    efficiently both as an individual contributor as well as
                    along with a team. I seek new challenges and try to think
                    out-of-the-box while looking for creative solutions to a
                    given problem.
                  </p>
                  <p>
                    Here are a few technologies I've been working with recently:
                  </p>
                  <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
                  {/* <div className="resume">
                    <span className="resume-btn">Resume</span>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-5 order2">
                <div className="img-card">
                  <Image
                    src="/assets/images/p1.jpeg"
                    alt=""
                    className="img-fluid imgs"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="random-facts">
            <div className="row justify-content-center order1 ">
              <div className="col-lg-7 text-center order2">
                <div className="mentor-img">
                  <Image
                    src="/assets/images/gojo5.jpg"
                    alt=""
                    width={350}
                    height={350}
                  />
                </div>
              </div>
              <div className="col-lg-5 text-center order1">
                <h2>Random facts</h2>
                <div className="texts">
                  <ul className="facts-list">
                    <li>I drink a lot of coffee</li>
                    <li>I'm a bit of a clean freak</li>
                    <li>Fan of movies, TV series</li>
                    <li>
                      I'm slightly addicted to{" "}
                      <Link
                        href="https://www.instagram.com/_imkaushik/"
                        target="_blank"
                        style={{ fontWeight: "500" }}
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      Spotify playlist{" "}
                      <Link
                        target="_blank"
                        href="https://open.spotify.com/playlist/1VZXAlqJdvwledp0RYTUvF"
                        style={{ fontWeight: "500" }}
                      >
                        Brighten Up<small>⚡</small>
                      </Link>
                    </li>
                    <li>Gojo is my mentor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          <div className="to-work-page">
            <Link href="/projects">
              <p className="mb-3">
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
