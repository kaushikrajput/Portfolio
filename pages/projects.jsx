import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <>
      <section className='work-section ' id='work'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-12'>
              <h2 className='main-heading'>Projects</h2>
            </div>
            <div className='card-section'>
              <a href='https://skinfotechies.netlify.app/' target='_blank' rel="noreferrer" className='card-style'  >
                <Image src="/assets/images/project.jpeg" className='img-style img-fluid' alt="" width={500} height={500}/>
              </a>
              <a href='https://tourtravelworld.netlify.app/' target='_blank' rel="noreferrer" className='card-style'  >
                <Image src="/assets/images/project2.png" className='img-style img-fluid' alt="" width={500} height={500}/>
              </a>
              <a href='https://healthy-day.netlify.app/' target='_blank' rel="noreferrer" className='card-style'  >
                <Image src="/assets/images/project3.png" className='img-style img-fluid' alt="" width={500} height={500}/>
              </a>
            </div>

            <div className='to-resume-page'>
              <Link href='/resume'>
                <p className='mb-5'>Lets Go To My Resume.
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
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
  )
}

export default Projects