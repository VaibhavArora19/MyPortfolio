import classes from "./About.module.css";
import profile from "../images/profile.png";

const About = () => {
  return (
    <div className={classes.aboutSection}>
      <h1 className={classes.about}>About</h1>
      <img src={profile} className={classes.profile} />
      <p className={classes.aboutMe}>
        Hello, I'm Vaibhav and I'm a Full Stack Web2 and Web3 Developer from
        India. Being curious about how these computers work I started coding at
        age of 20 and since then I never looked back.
        <br />
        <br />
        I graduated from my Bachelors Degree in Computer Science and Engineering
        in 2022 and I am currently pursuing my Masters while building awesome
        applications in both web2 and web3 space.
        <br />
        <br />
        In the past year I've been focusing on programming and becoming a full
        stack web developer. After few months I came to know about blockchain
        and web3 and it made me thinking about web3!
        <br />
        <br />
        Take a look at my work below to see what I'm working on, and get in
        touch if you'd like to work together!
      </p> 
    </div>
  );
};

export default About;
