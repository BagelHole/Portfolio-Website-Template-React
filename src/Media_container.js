import React from "react";
import Learning from "./images/learning.svg";
import Engineer from "./images/engineer.svg";
import Gear from "./images/gear.svg";

class Media_container extends React.Component {
  render() {
    return (
      <div className="media-container">
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img src={Learning} alt="Self Taught" />
            </div>
          </div>
          <div>
            <h2>Self Taught</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
               Used internet resources to learn Cloud, Javascript, React, and more.
            </p>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img src={Gear} alt="Gear"/>
            </div>
          </div>
          <div>
            <h2>Always Working</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
            Available for freelancing. Focused in Cloud, and Full Stack Web Development. (React, Terraform, Solidity, etc.)
            </p>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img src={Engineer} alt="engineer"/>
            </div>
          </div>
          <div>
            <h2>Problem Solver</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
              No problem is too big or too small. I can solve any problem.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Media_container;
