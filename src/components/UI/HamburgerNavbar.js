import { useState } from 'react';
import classes from './HamburgerNavbar.module.css';

const HamburgerNavbar = () => {

  return (
    <div className= {classes.options}>
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
