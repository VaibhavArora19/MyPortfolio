
import classes from "./Navbar.module.css";
import Hamburger from "./UI/Hamburger";

const Navbar = (props) => {

  return (
    <div className={classes.navbar} id="NavbarId">
      <div>
        <h1 className={classes.title}>
          <span className={classes.icon}>
            <i className="fa-solid fa-terminal"></i>
          </span>
          <span>Vaibhav Arora</span>
        </h1>
      </div>
      {props.showHamburger ? <Hamburger showOrHideNavbar = {props.showNavbar} /> :<div>
        <div className={classes.options}>
          <div>
            <a href="#NavbarId">Home</a>
          </div>
          <div>
            <a href="#AboutId">About</a>
          </div>
          <div>
            <a href="#SkillsId">Skills</a>
          </div>
          <div>
            <a href="#MyWorkId">My Work</a>
          </div>
          <div>
            <a href="#ContactId">Contact</a>
          </div>
          <div>
            <a href="https://linktr.ee/vaibhavarora19" target="_blank">Connect</a>
          </div>

          <div className={classes.button}>
            <a href="#ContactId">Hire me</a>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Navbar;
