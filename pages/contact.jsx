import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [modalShow, setModalShow] = React.useState(false);

  //const getMessage = async (e) => {
  //    e.preventDefault()
  //    const { data } = await axios.post("https://my-portfolio-9b7dc-default-rtdb.firebaseio.com/userRecord.json", { name: name, email: email, message: message });
  //    setModalShow(true)
  //    console.log(data);
  //}

  return (
    <div className="contact">
      <div className="container">
        <div className="row ">
          <h2 className="main-heading">Contact</h2>
          <p>
            Get in touch or shoot me an email directly on&nbsp;
            <b>kaushikrajput0926@gmail.com</b>
          </p>
          <div className="col-md-6">
            <form action="https://formspree.io/f/mrgvypnk" method="POST">
              <div className="fields">
                <div className="fields ">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    area-required="true"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="fields ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    area-required="true"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="fields ">
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Message"
                    area-required="true"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
                <button
                  className="btn btn-default"
                  type="submit"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
        <div className="to-home-page mb-2">
          <Link href="/">
            <p className="mt-3">
              Go Back Home
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

export default Contact;
