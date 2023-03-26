import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';

const Contact = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [modalShow, setModalShow] = React.useState(false);

    const getMessage = async (e) => {
        e.preventDefault()
        const { data } = await axios.post("https://my-portfolio-9b7dc-default-rtdb.firebaseio.com/userRecord.json", { name: name, email: email, message: message });
        setModalShow(true)
        console.log(data);
    }

    return (
        <>
            <div className='contact-page'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <h2 className='main-heading' data-aos="fade-right" data-aos-duration="1200">Contact</h2>
                        <div className='col-md-10'>
                            <p data-aos="fade-down" data-aos-duration="1200">Get in touch or shoot me an email directly on&nbsp;
                                <b>kaushikrajput0926@gmail.com</b>
                            </p>
                            <br />
                            <form action="">
                                <div className='fields'>
                                    <div className='fields-half'>
                                        <input type="text" name='name' id='name' className='form-control' placeholder='Name' area-required='true' required value={name} onChange={(e) => setName(e.target.value)}  data-aos="fade-down" data-aos-duration="1400"  data-aos-once="true"/>
                                    </div>
                                    <div className='fields-half'>
                                        <input type="email" name='email' id='email' className='form-control' placeholder='Email' area-required='true' required value={email} onChange={(e) => setEmail(e.target.value)}  data-aos="fade-down" data-aos-duration="1200"  data-aos-once="true"/>
                                    </div>
                                    <div className='fields-half'>
                                        <textarea type="text" rows='5' name='message' id='message' className='form-control' placeholder='Message' area-required='true' required value={message} onChange={(e) => setMessage(e.target.value)}  data-aos="fade-down" data-aos-duration="1000"  data-aos-once="true"/>
                                    </div>
                                    <button className='btn btn-default' type='submit' onClick={getMessage} data-aos="fade-down" data-aos-duration="800"  data-aos-once="true" >Send Message</button>
                                </div>
                            </form>
                            <div className='to-home-page'>
                                <Link href='/'>
                                    <p className='mb-5'>Go Back Home
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


            <Modal
                show={modalShow} onHide={() => setModalShow(false)}
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
            </Modal>
        </>
    )
}

export default Contact