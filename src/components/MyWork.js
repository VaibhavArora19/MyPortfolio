import classes from "./MyWork.module.css";

import nextjs from "../images/nextjs.svg";
import solidity from "../images/solidity.svg";
import ETHLinked from "../images/ETHLinked.png";
import CryptoMarket from "../images/CryptoMarket.png";
import ToDo from "../images/ToDo.png";

const MyWork = () => {
  return (
    <div className={classes.myWorkSection}>
      <h1 className={classes.heading}>My Work</h1>
      <div className={`${classes.project} grid grid-cols md:grid-cols-2`}>
        <div>
          <img
            src={ETHLinked}
            className={classes.image}
            style={{ float: "left" }}
            alt="ETHLinked"
          />
        </div>
        <div className={classes.technologies}>
          <h2>JUST LAUNCHED</h2>
          <h3>ETHLinked</h3>
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
                src={nextjs}
                alt="nextjs-icon"
                className={classes.changeColor}
              />
              <h4>Next</h4>
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
          <p>Add your achievements on blockchain.</p>
          <div className={classes.buttons}>
            <a href="https://eth-linked.vercel.app/">
              <button className="btn btn-active btn-ghost">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
              </button>
            </a>
            <a href="https://github.com/VaibhavArora19/ETHLinked">
              <button className="btn btn-active btn-ghost">
                <i className="fa-brands fa-github"></i> Source
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={`${classes.project} grid grid-cols md:grid-cols-2`}>
        <div className={classes.technologies}>
          <h2>Backend & API</h2>
          <h3>Crypto Market</h3>
          <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5`}>
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
          <p>Track 50+ cryptocurrency details in real time.</p>
          <div className={classes.buttons}>
            <a href="https://crypto-market-19.herokuapp.com">
              <button className="btn btn-active btn-ghost">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
              </button>
            </a>
            <a href="https://github.com/VaibhavArora19/Crypto-Market">
              <button className="btn btn-active btn-ghost">
                <i className="fa-brands fa-github"></i> Source
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={CryptoMarket}
            className={classes.image}
            style={{ float: "right" }}
            alt="Crypto-Market"
          />
        </div>
      </div>

      <div className={`${classes.project} grid grid-cols md:grid-cols-2`}>
        <div>
          <img
            src={ToDo}
            className={classes.image}
            style={{ float: "left" }}
            alt="ToDo-App"
          />
        </div>

        <div className={classes.technologies}>
          <h2>Beginner Friendly</h2>
          <h3>ToDo App</h3>
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
          <p>Add your tasks on ethereum network, so that you never forget about them.</p>
          <div className={classes.buttons}>
          <a href="https://decentralized-to-do.vercel.app/">
            <button className="btn btn-active btn-ghost">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
            </button>
          </a>
          <a href="https://github.com/VaibhavArora19/Decentralized-ToDo">
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
