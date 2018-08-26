import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


export default class Experience extends React.Component {
  render() {
    return (
      <Element name="experience">
		<section id="experience" className="sectionWrapper">
			<header className="major">
				<h1>Experience</h1>
			</header>
			<div style={{paddingBottom: "1rem"}}>
				<div className="whiteSpace">
					<img className="logo" src="img/bct_logo.png" />
					<div>
						<h2 className="margin3 jobTitle">Full Stack Software Engineer </h2>
						<p>BroadConnect Telecom - Toronto, Ontario<span className="floatRight">November, 2017 - Present</span></p>
					</div>
				</div>
				<ul>
					<li>
						Converted existing data processing system to a highly scalable concurrent system that can process thousands of calls per second.
					</li>
					<li>
						Coordinated migration of AWS servers to own servers, reducing monthly server costs by over 60%.
					</li>
					<li>
						Managed and architected new features for a realtime reporting web application that retrieves, processes and analyzes VOIP phone call data.
					</li>
					<li>
						Created a collection of scheduled tests to automatically check the application and return a report of its state.
					</li>
					<li>
						<strong>Technologies:</strong> Django, AngularJS, Bootstrap, Nginx, Celery, Selenium, Redis, PostgreSQL
					</li>
				</ul>
			</div>
			<div style={{paddingBottom: "1rem"}}>
				<div className="whiteSpace">
					<img className="logo" src="img/bct_logo.png" />
					<div>
						<h2 className="margin3 jobTitle">Junior Full Stack Software Engineer</h2>
						<p>BroadConnect Telecom - Toronto, Ontario<span className="floatRight">May, 2016 - November, 2017</span></p>
					</div>
				</div>
				<ul>
					<li>
						Developed and maintained a realtime reporting web application that retrieves, processes and analyzes VOIP phone call data.
					</li>
					<li>
						Maintained a low error rate using regression testing with over 80% code coverage, and developed in-house automation tools with Selenium.
					</li>
					<li>
						Made changes to frontend to make the website more responsive and improve cross-browser compatibility.
					</li>
					<li>
						<strong>Technologies:</strong> Django, AngularJS, Bootstrap, Nginx, Celery, Selenium, Redis, PostgreSQL, AWS
					</li>
				</ul>
			</div>
		</section>
      </Element>
    );
  }
}