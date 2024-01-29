import classes from "./MyWork.module.css";

import nextjs from "../images/nextjs.svg";
import solidity from "../images/solidity.svg";
import Fantom from "../images/fantom.png";
import Simplefluid from "../images/Simplefluid.png";
import ExplorerX from "../images/ExplorerX.png";
import ToDo from "../images/ToDo.png";

const MyWork = () => {
  return (
    <div className={classes.myWorkSection} id="MyWorkId">
      <h1 className={classes.heading}>My Work</h1>
      <div className={`${classes.project} grid grid-cols md:grid-cols-2`}>
        <div>
          <img
            src={Simplefluid}
            className={classes.image}
            style={{ float: "left" }}
            alt="ETHLinked"
          />
        </div>
        <div className={classes.technologies}>
          <h2>MOST CREATIVE</h2>
          <h3>SIMPLEFLUID</h3>
          <div className={`grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5`}>
            <span>
              <i className="fa-brands fa-node-js fa-3x"></i>
              <h4>Node</h4>
            </span>
            <span>
              <i className="fa-brands fa-react fa-3x"></i>
              <h4>React</h4>
            </span>
            <span>
              <img
                src={nextjs}
                alt="nextjs-icon"
                className={classes.changeColor}
              />
              <h4 className={classes.nextheading}>Next</h4>
            </span>
            <span>
              <img
                src={solidity}
                className={classes.solidity}
                alt="solidty-icon"
              />
              <h4>Solidity</h4>
            </span>
          </div>
          <p>The all in one superfluid dashboard.</p>
          <div className={classes.buttons}>
            <a href="https://simplefluid-1tjg.vercel.app/">
              <button className="btn btn-active btn-ghost">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
              </button>
            </a>
            <a href="https://github.com/VaibhavArora19/Simplefluid">
              <button className="btn btn-active btn-ghost">
                <i className="fa-brands fa-github"></i> Source
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={`${classes.project} grid grid-cols md:grid-cols-2`}>
        <div className={classes.technologies}>
          <h2>Alert & Notifications</h2>
          <h3>Fantom Alert</h3>
          <div className={`grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5`}>
            <span>
              <i className="fa-brands fa-html5 fa-3x"></i>
              <h4>HTML</h4>
            </span>
            <span>
              <i class="fa-brands fa-bootstrap fa-3x"></i>
              <h4>Bootstrap</h4>
            </span>
            <span>
              <i className="fa-brands fa-js fa-3x"></i>
              <h4>Javascript</h4>
            </span>
            <span>
              <i className="fa-brands fa-node-js fa-3x"></i>
              <h4>Node</h4>
            </span>
          </div>
          <p>Send real time notifications on flow blockchain.</p>
          <div className={classes.buttons}>
            <a href="https://fantom-alert.vercel.app/">
              <button className="btn btn-active btn-ghost">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
              </button>
            </a>
            <a href="https://github.com/VaibhavArora19/FantomAlert">
              <button className="btn btn-active btn-ghost">
                <i className="fa-brands fa-github"></i> Source
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={Fantom}
            className={classes.image}
            style={{ float: "right" }}
            alt="Crypto-Market"
          />
        </div>
      </div>

      <div className={`${classes.project} grid grid-cols md:grid-cols-2`}>
        <div>
          <img
            src={ExplorerX}
            className={classes.image}
            style={{ float: "left" }}
            alt="ToDo-App"
          />
        </div>

        <div className={classes.technologies}>
          <h2>Cross Chain</h2>
          <h3>ExplorerX</h3>
          <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5`}>
            <span>
              <i className="fa-brands fa-html5 fa-3x"></i>
              <h4>HTML</h4>
            </span>
            <span>
              <i className="fa-brands fa-react fa-3x"></i>
              <h4>React</h4>
            </span>
            <span>
              <img
                src={solidity}
                className={classes.solidity}
                alt="solidty-icon"
              />
              <h4>Solidity</h4>
            </span>
          </div>
          <p>Take your smart contracts cross chain.</p>
          <div className={classes.buttons}>
            <a href="https://explorerx.vercel.app/">
              <button className="btn btn-active btn-ghost">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
              </button>
            </a>
            <a href="https://github.com/crossX-xyz/crossx-ccip">
              <button className="btn btn-active btn-ghost">
                <i className="fa-brands fa-github"></i> Source
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
