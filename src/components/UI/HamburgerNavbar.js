
import classes from './HamburgerNavbar.module.css';

const HamburgerNavbar = (props) => {
    const hideNavbarHandler = () => {
        props.onClick();
    };

  return (
    <div className= {classes.options} onClick = {hideNavbarHandler}>
    <div>
        <a href="#AboutId">About</a>
      </div>
      <div>
        <a href="#SkillsId">Skills</a>
      </div>
      <div>
        <a href="#MyWorkId">Work</a>
      </div>
      <div>
        <a href="#ContactId">Contact</a>
      </div>
    </div>
  );
};

export default HamburgerNavbar;
