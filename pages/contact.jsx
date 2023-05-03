import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';

const Contact = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const [modalShow, setModalShow] = React.useState(false);

    //const getMessage = async (e) => {
    //    e.preventDefault()
    //    const { data } = await axios.post("https://my-portfolio-9b7dc-default-rtdb.firebaseio.com/userRecord.json", { name: name, email: email, message: message });
    //    setModalShow(true)
    //    console.log(data);
    //}

    return (
        <>
            <div className='contact-page'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <h2 className='main-heading' data-aos="fade-down" data-aos-duration="1600">Contact</h2>
                            <p data-aos="fade-down" data-aos-duration="1400">Get in touch or shoot me an email directly on&nbsp;
                                <b>kaushikrajput0926@gmail.com</b>
                            </p>
                        <div className='col-md-6'>
                            <form action="https://formspree.io/f/mrgvypnk"
                                method="POST">
                                <div className='fields'>
                                    <div className='fields half'>
                                        <input
                                            type="text"
                                            name='name'
                                            id='name'
                                            className='form-control'
                                            placeholder='Name'
                                            area-required='true'
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            data-aos="fade-down" data-aos-duration="1000" />
                                    </div>
                                    <div className='fields half'>
                                        <input
                                            type="email"
                                            name='email'
                                            id='email'
                                            className='form-control'
                                            placeholder='Email'
                                            area-required='true'
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            data-aos="fade-down" data-aos-duration="1200" />
                                    </div>
                                    <div className='fields half'>
                                        <textarea
                                            rows='5'
                                            name='message'
                                            id='message'
                                            className='form-control'
                                            placeholder='Message'
                                            area-required='true'
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            data-aos="fade-down" data-aos-duration="1400" />
                                    </div>
                                    <button
                                        className='btn btn-default'
                                        type='submit'
                                        aria-label='Send Message'
                                        data-aos="fade-down" data-aos-duration="1200"
                                    >Send Message
                                    </button>
                                </div>
                            </form>
                            <div className='to-home-page mb-2'>
                                <Link href='/'>
                                    <p className='mb-5'>Go Back Home
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" >
                                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                                        </svg>
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='google-map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4603.194813717168!2d77.34558617859463!3d28.633687107097007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1681545614815!5m2!1sen!2sin" width="700" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<Modal
                show={mod00alShow} onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='container form-status'>
                        <div className='row'>
                            <div className='col-1-1'>
                                <h1>Thanks!</h1>
                                <p>The form was submitted successfully.</p>
                                <a target='top' onClick={() => setModalShow(false)} >
                                    Go back
                                </a>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>*/}
        </>
    )
}

export default Contact