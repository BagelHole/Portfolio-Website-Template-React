import React from "react";

class Roadmap extends React.Component {
  render() {
    return (
      <div className="Roadmap">
        <div className="roadmap-header">
        <h2>Project & Learning Roadmap</h2>
        <p className="text text--standart text--regular ">
          Take a look at my future, current, and past milestones.
        </p>
        </div>
        <div className="Skills">
        <div className="card card--secondary card-red">
          <div className="card__header">
            <h3>To Do</h3>
          </div>
          <ul>
            <li>Learn AWS with Terraform</li>
            <li>Contribute to an Open Source Project</li>
            <li>Master LeetCode</li>
          </ul>
        </div>
        <div className="card card--white card-yellow">
          <div className="card__header">
            <h3>In Progress</h3>
          </div>
          <ul>
            <li>Master TypeScript</li>
            <li>Master React</li>
            <li>Master Terraform</li>
          </ul>
        </div>
        <div className="card card--white card-green">
          <div className="card__header">
            <h3>Complete</h3>
          </div>
          <ul>
            <li>Create Open Source GCP Terraform Templates</li>
            <li>Python Stock Script Open Sourced</li>
            <li>Website Design</li>
            <li>Website Deployment</li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
