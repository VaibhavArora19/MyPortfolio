import { useState } from "react";
import classes from "./Navbar.module.css";


const Navbar = () => {
  const [isLight, setIsLight] = useState(false);


  let activeStyle = {
    color:"white",
    borderBottom: "4px solid #FF9F29"
  }

  const darkModeHandler = () => {
    setIsLight(!isLight);
  }
  return (
    <div className={classes.navbar} id = "NavbarId">
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
        <div><a href = "#SkillsId">Home</a></div>
        <div>About</div>
        <div>Skills</div>
        <div>My Work</div>
        <div><a href = "#">Contact</a></div>

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
