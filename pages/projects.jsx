import Link from "next/link";
import Image from "next/image";
import { projectsDATA } from "../components/ProjectData";

const Projects = () => {
  return (
    <>
      <section className="projects " id="work">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <h2>Projects</h2>
            </div>
            <div className="card-section">
              {projectsDATA.map((item) => (
                <div key={item.id}>
                  <a
                    title={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="card-style"
                  >
                    <Image
                      src={item.imageUrl}
                      className="img-style "
                      alt=""
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              ))}
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
    </>
  );
};

export default Projects;
