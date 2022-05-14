import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__top">
        <div className="footer__top__logo">
          <span className="text text--medium">tobym.dev</span>
        </div>
      </div>

       <div className="footer__bottom">
        <div className="footer__bottom__copyright text text--small text--regular">
          ©2022 tobym.dev. All rights reserved.
        </div>
      </div>
      </footer>
    );
  }
}

export default Footer;
