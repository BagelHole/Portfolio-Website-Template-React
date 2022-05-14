import React from "react";
import WorkIcon from "./images/comp.svg";
import SchoolIcon from "./images/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Features extends React.Component {
  render() {
    return (
      <section className="exp">
        <h1 className="exp-title">
          Experience
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(21, 109, 179)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(21, 109, 179)' }}
            date="2021 - present"
            iconStyle={{ background: 'rgb(21, 109, 179)', color: '#fff' }}
            icon={<img src={WorkIcon} alt="Work"/>}
          >
            <h3 className="vertical-timeline-element-title">Cloud Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
            Lead creation of infrastructure as code using Terraform, and Securing Google Cloud Platform to HIPAA & NIST requirements/ standards.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(21, 109, 179)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(21, 109, 179)' }}
            date="2019 - 2021"
            iconStyle={{ background: 'rgb(21, 109, 179)', color: '#fff' }}
            icon={<img src={WorkIcon} alt="Work"/>}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer & System Admin</h3>
            <h4 className="vertical-timeline-element-subtitle">Rochester, NY</h4>
            <p>
              Android & iOS App Development. Server Deployment and Maintenance. Security Compliance through NIST standards.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(21, 109, 179)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(21, 109, 179)' }}
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(21, 109, 179)', color: '#fff' }}
            icon={<img src={WorkIcon} alt="Work"/>}
          >
            <h3 className="vertical-timeline-element-title">System Administrator</h3>
            <h4 className="vertical-timeline-element-subtitle">Rochester, NY</h4>
            <p>
              Server Deployment and Maintenance. Security Compliance through NIST standards. Networking, Computer Hardware.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(21, 109, 179)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(21, 109, 179)' }}
            date="2016 - 2017"
            iconStyle={{ background: 'rgb(21, 109, 179)', color: '#fff' }}
            icon={<img src={WorkIcon} alt="Work"/>}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Brockport, NY</h4>
            <p>
              User Experience, Visual Design, HTML, CSS, JS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(54, 18, 163)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(54, 18, 163)' }}
            date="2018"
            iconStyle={{ background: 'rgb(54, 18, 163)', color: '#fff' }}
            icon={<img src={SchoolIcon} alt="School"/>}
          >
            <h3 className="vertical-timeline-element-title">Associate of Science - Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">MCC</h4>
            <p>
              Computer Science, IT, Math
            </p>
          </VerticalTimelineElement>
      </VerticalTimeline>
      </section>
    );
  }
}

export default Features;
