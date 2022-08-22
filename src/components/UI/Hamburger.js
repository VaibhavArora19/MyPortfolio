import classes from './Hamburger.module.css';

const Hamburger = (props) => {

    const showNavbarHandler = () => {
        props.showOrHideNavbar();
    }
    return <div>
    <div className= {classes.hamburger} onClick = {showNavbarHandler}>
    <div className="space-y-2">
    <div className="w-8 h-0.5 bg-white"></div>
    <div className="w-8 h-0.5 bg-white"></div>
    <div className="w-8 h-0.5 bg-white"></div>
    </div>
    </div>
    </div> 
};

export default Hamburger;