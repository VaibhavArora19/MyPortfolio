import { useState, useRef } from "react";

import classes from "./Contact.module.css";

import Message from "../images/Message.svg";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const contactData = await fetch("https://portfolio-server-360g.onrender.com/postContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    });

    

    await contactData.json();

      setIsSending(false);

      firstNameRef.current.value = '';
      lastNameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';
  };

  return (
    <div className={classes.contactSection} id="ContactId">
      <h1 className={classes.heading}>Contact</h1>
      <p>
        I am currently available to get involved with new projects, so get in
        touch if you'd like to work together.
      </p>
      <div className={classes.formImage}>
        <img src={Message} alt="message-icon" />
        <div className={classes.form}>
          <form onSubmit={formSubmitHandler}>
            <div className={`grid grid-cols md:grid-cols-2`}>
              <div>
                <label className={classes.label}>FIRST NAME</label>
                <input
                  type="text"
                  placeholder="Gavin"
                  className={classes.input}
                  ref={firstNameRef}
                  required
                />
              </div>
              <div>
                <label className={classes.label}>LAST NAME</label>
                <input
                  className={`${classes.input}`}
                  type="text"
                  placeholder="Belson"
                  ref={lastNameRef}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label className={classes.label}>EMAIL</label>
                <input
                  className={` ${classes.input} ${classes.email}`}
                  type="email"
                  placeholder="vitalik@gmail.com"
                  ref={emailRef}
                  autoComplete = "on"
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label className={classes.label}>MESSAGE</label>
                <input
                  className={classes.textarea}
                  type="text"
                  ref={messageRef}
                  placeholder="Say Something nice."
                />
              </div>
            </div>
            {!isSending ? (
              <button className="btn btn-primary">Send</button>
            ) : (
              <button className="btn btn-primary loading"></button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
