import { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  const darkModeHandler = () => {
    setIsDark(!isDark);
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
            <button className="btn btn-primary">Hire me</button>
          </div>
          <div>
            <button onClick = {darkModeHandler}>
              {isDark ? (
                <i className="fa-solid fa-moon fa-2x"></i>
              ) : (
                <i class="fa-solid fa-brightness fa-2x"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
