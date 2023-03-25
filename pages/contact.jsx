import React from 'react'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className='contact-page'>
            <div className='container'>
                <div className='row align-items-center'>
                    <h2 className='main-heading' data-aos="fade-right" data-aos-duration="1200">Contact</h2>
                    <div className='col-md-10'>
                        <p data-aos="fade-right" data-aos-duration="1200">Get in touch or shoot me an email directly on&nbsp;
                            <b>kaushikrajput0926@gmail.com</b>
                        </p>
                        <br />
                        <form action="">
                            <div className='fields'>
                                <div className='fields-half'>
                                    <input type="text" name='name' id='name' className='form-control' placeholder='Name' area-required='true' required/>
                                </div>
                                <div className='fields-half'>
                                    <input type="email" name='email' id='email' className='form-control' placeholder='Email' area-required='true' required/>
                                </div>
                                <div className='fields-half'>
                                    <textarea type="text" rows='5' name='message' id='message' className='form-control' placeholder='Message' area-required='true' required />
                                </div>
                                <button className='btn btn-default' type='submit'>Send Message</button>
                            </div>
                        </form>
                        <div className='to-home-page'>
                            <Link href='/'>
                                <p className='mb-5'>Go Back Home
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                                    </svg>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact