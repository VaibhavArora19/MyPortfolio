import classes from "./Introduction.module.css";

import { TypeAnimation } from "react-type-animation";

const Introduction = () => {

  return (
    <div className={classes.introduction} id = "IntroductionId">
      <h2 className={classes.heading}>Hello! 👋 My name is</h2>
      <h1 className={classes.name}>Vaibhav Arora</h1>
      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          1300,
          "Web3 Enthusiast",
          1300,
          "Open Source Contributor",
          1300,
          "Good Teammate",
          1300
        ]}
        style = {{fontSize: '2.2em', fontFamily: 'acumin-pro, sans-serif', fontWeight: '700', 'fontStyle': 'normal'}}
        wrapper = {"h2"}
        speed = {45}
        repeat = {Infinity}
      />
      <h2 className={classes.explaination}>I engineer ecosystems, not just softwares!</h2>
      <a href = "#MyWorkId"><button className={`btn btn-primary ${classes.work}`}>See my work</button></a>
    </div>
  );
};

export default Introduction;
