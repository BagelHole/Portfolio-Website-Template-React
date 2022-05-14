import React from "react";
import Cloud from "./images/cloud-code.svg";
import ETH from "./images/eth-logo.svg";
import Code from "./images/coding.svg"
import Security from "./images/security.svg";

class Skills extends React.Component {
  render() {
    return (
      <div className="Skills">
        <div className="card card--white">
          <div className="skill-icon">
            <img src={Cloud} alt="cloud"/>
          </div>
          <div className="card__header">
            <h3>Cloud</h3>
          </div>
          <div className="Skills skills">
          <ul>
            <li>Terraform</li>
            <li>Infrastructure as Code</li>
            <li>GCP</li>
            <li>CI/CD</li>
          </ul>
          </div>
        </div>
        <div className="card card--secondary">
          <div className="skill-icon">
            <img src={Code} alt="code"/>
          </div>
          <div className="card__header">
            <h3>Software</h3>
          </div>
          <div className="Skills skills">
          <ul>
            <li>JavaScript & TypeScript</li>
            <li>React</li>
            <li>Python</li>
            <li>Android & iOS Development</li>
            <li>HTML & CSS</li>
          </ul>
          </div>
        </div>
        <div className="card card--white">
          <div className="skill-icon">
            <img src={Security} alt="security"/>
          </div>
          <div className="card__header">
            <h3>Security</h3>
          </div>
          <div className="Skills skills">
          <ul>
            <li>HIPAA & NIST Compliance</li>
            <li>Security Procedures & Policies</li>
            <li>Security Audits</li>
            <li>Server Deployment and Maintenance</li>
            <li>System Administration</li>
          </ul>
          </div>
        </div>
        <div className="card card--secondary">
          <div className="skill-icon">
            <img src={ETH} alt="eth"/>
          </div>
          <div className="card__header">
            <h3>Web3.0
            </h3>
          </div>
          <div className="Skills skills">
          <ul>
            <li>Solidity (ETH Smart Contracts)</li>
            <li>useDApp, web3js</li>
            <li>Hardhat</li>
          </ul>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Skills;
