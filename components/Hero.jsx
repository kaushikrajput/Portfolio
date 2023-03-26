import React from 'react'
import Link from 'next/link'

const Hero = () => {

    return (
        <>
            <section className="hero-section ">
                <div className='container'>
                    <div className='row align-item-center justify-content-center'>
                        <div className='col-md-10'>
                            <div className="text-block">
                                <h1 data-text="I'm Kaushik Rajput" className='intro-text'  data-aos="fade-down" data-aos-duration="2000">
                                    <mark className='mark'>I’m Kaushik Rajput</mark>
                                </h1>
                                <div className="big-heading" data-aos="fade-down" data-aos-duration="1600" >
                                    <h3>I build things for the web.</h3>
                                </div>
                                <p data-aos="fade-down" data-aos-duration="1200">Front End Developer</p>
                                <div className='to-about-page' data-aos="fade-down" data-aos-duration="1000">
                                    <Link href="/about">
                                        <p>See More About Me
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                                            </svg>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




export default Hero;




