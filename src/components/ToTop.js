import classes from './ToTop.module.css';

const ToTop = () => {
    const takeToTopHandler = () => {
        window.scrollTo(0, 0);
    };

    
    
    return <div className= {classes.top} onClick = {takeToTopHandler}>
        <span>⇪</span>
    </div>
};

export default ToTop;