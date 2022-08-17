import { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isLight, setIsLight] = useState(false);

  const darkModeHandler = () => {
    setIsLight(!isLight);
  }
  return (
    <div className={classes.navbar}>
      <div>
        <h1 className={classes.title}>
          <span className={classes.icon}>
            <i className="fa-solid fa-terminal"></i>
          </span>
          <span>Vaibhav Arora</span>
        </h1>
      </div>
      <div>
        <div className={classes.options}>
          <div>Home</div>
          <div>About</div>
          <div>Skills</div>
          <div>My Work</div>
          <div>Contact</div>

          <div className={classes.button}>
            Hire me
          </div>
          <div>
            <button onClick = {darkModeHandler}>
              {isLight ? (
                <i className="fa-solid fa-brightness fa-2x"></i>
              ) : (
               
                <i className="fa-solid fa-moon fa-2x"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
