import { useState } from "react";

import classes from "./Contact.module.css";

import Message from "../images/Message.svg";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
    },2000);
  };

  return (
    <div className={classes.contactSection} id = "ContactId">
      <h1 className={classes.heading}>Contact</h1>
      <p>
        I am currently available to get involved with new projects, so get in
        touch if you'd like to work together.
      </p>
      <div className={classes.formImage}>
        <img src={Message} alt="message-icon" />
        <div className={classes.form}>
          <form onSubmit={formSubmitHandler}>
            <div className={`grid grid-cols-1 md:grid-cols-2`}>
              <div>
                <label className={classes.label}>FIRST NAME</label>
                <input
                  type="text"
                  placeholder="Gavin"
                  className={classes.input}
                />
              </div>
              <div>
                <label className={classes.label}>LAST NAME</label>
                <input
                  className={`${classes.input}`}
                  type="text"
                  placeholder="Belson"
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
                />
              </div>
            </div>
            <div>
              <div>
                <label className={classes.label}>MESSAGE</label>
                <input
                  className={classes.textarea}
                  type="text"
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
