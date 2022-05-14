import React from "react";
import Typical from 'react-typical';

class Header_body extends React.Component {
  render() {
    return (
      <div className="header_body">
        <div className="grid_choose grid-gap--small">
          <div className="value-proposition">
            <h1 className="value-proposition__title">
              Toby Miller
            </h1>
            <p className="value-proposition__text text text--small text--regular">
            <Typical
                steps={['Cloud Engineer', 1200, 'Software Engineer', 1200, 'Security Engineer', 1200]}
                loop={Infinity}
                wrapper="p"
              />
            </p>
              <div className="badge-container-add">
              <span className="badge-hold badge--dark-hold text--small">Current Project:</span>
              <span className="text text--small text--regular text--white badge-add3">
                <a href="https://www.meowcharts.com/">MeowCharts.com</a> & AWS Learning
              </span>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header_body;
