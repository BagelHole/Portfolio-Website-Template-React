import React from "react";
import Logo from "./images/me-smile-circle-300px.png";
import Twitter from "./images/twitter.svg";
import GitHub from "./images/github.svg";
import {Link as LinkR} from 'react-scroll';

class Header_top extends React.Component {
  render() {
    return (
      <div className="header_top">
        <div className="logo">
          <embed className="toby-pic"src={Logo} alt=" Toby Miller" />
          <span className="logo-topleft">tobym.dev</span>
        </div>
        <nav>
          <ul className="list list--inline">
          <LinkR to="buyLink" spy={true} smooth={true}><li className="list__item text text--small text--regular">
              Skills
            </li></LinkR>
            <LinkR to="exp" spy={true} smooth={true}><li className="list__item text text--small text--regular">
              Experience
            </li></LinkR>
          </ul>
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://twitter.com/TheTobyMiller">
          <img className ="discord" alt="Twitter" src={Twitter}></img>
          </button></form>
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://github.com/BagelHole">
          <img className ="discord" alt="GitHub" src={GitHub}></img>
          </button></form>
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://twitter.com/TheTobyMiller">
          <img className ="discord2" alt="Twitter" src={Twitter}></img>
          </button>
          </form>
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://github.com/BagelHole">
          <img className ="discord2" alt="GitHub" src={GitHub}></img>
          </button>
          </form>
        </nav>
      </div>
      
    );
  }
}
export default Header_top;
