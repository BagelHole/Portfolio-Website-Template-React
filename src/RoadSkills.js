import React from "react";
import Roadmap from "./Roadmap";
import Skills from "./Skills";

class RoadSkills extends React.Component {
  render() {
    return (
      <section className="trade-securely">
        
        <Roadmap></Roadmap>
        <h2 className="text--primary text-howBuy" id='buyLink'>
          Skills
        </h2>
        <Skills></Skills>
      </section>
    );
  }
}

export default RoadSkills;
