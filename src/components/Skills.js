import classes from "./Skills.module.css";

import nextjsIcon from "../images/nextjs.svg";
import cpp from "../images/cpp.svg";
import solidity from "../images/solidity.svg";
import blockchain from "../images/blockchain.svg";

const Skills = () => {
  return (
    <div className={classes.skillsSection}>
      <h1 className={classes.heading}>Skills</h1>
      <div className = {`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5`}>
        <div className= {classes.skills}>
          <i className="fa-brands fa-html5 fa-6x"></i>
          <h3>HTML</h3>
          </div>
        <div className= {classes.skills}>
        <i className="fa-brands fa-css3-alt fa-6x"></i>
        <h3>CSS</h3>
        </div>
        <div className= {classes.skills}>
        <i class="fa-brands fa-bootstrap fa-6x"></i>
        <h3>Bootstrap</h3>
        </div>
        <div className= {classes.skills}>
        <i className="fa-brands fa-js fa-6x"></i>
        <h3>Javascript</h3>
        </div>
        <div className = {classes.skills}>
        <i className="fa-brands fa-react fa-6x"></i>
        <h3>React</h3>
        </div>
        <div className = {classes.skills}>
        <img src = {nextjsIcon} className = {classes.changeColor} alt = "nextjs-icon"/>
        <h3>Next</h3>
        </div>
        <div className = {classes.skills}>
        <i className="fa-brands fa-node-js fa-6x"></i>
        <h3>Node</h3>
        </div>
        <div className= {classes.skills}>
        <i className="fa-brands fa-git-alt fa-6x"></i>
        <h3>Git</h3>
        </div>
        <div className= {classes.skills}>
        <img src = {cpp} alt = "cpp-icon"/>
        <h3>C++</h3>
        </div>
        <div className= {classes.skills}>
        <img src = {solidity} alt = "solidity-icon"/>
        <h3>Solidity</h3>
        </div>
        <div className= {classes.skills}>
        <img src = {blockchain} className = {classes.changeColor} alt = "blockchain-icon"/>
        <h3>Blockchain</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
