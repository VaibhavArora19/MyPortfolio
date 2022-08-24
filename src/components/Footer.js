import classes from './Footer.module.css';

const Footer = () => {
    return <div className= {classes.footerSection}>
        <span>
        <hr className={`h-1 mb-16 dark:bg-white bg-dark border-0 opacity-10`}></hr>
        <i className="fa-solid fa-terminal fa-2x"></i>
        </span>
        <p>© 2022 - Designed and built by Vaibhav Arora</p>

    </div>
};

export default Footer;