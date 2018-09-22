import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



export default class Experience extends React.Component {

	constructor(props){
		super(props);
		this.jobs = [
			{
				title: "Full Stack Software Developer",
				address: "BroadConnect Telecom - Toronto, Ontario",  
				date: "November, 2017 - Present",
				logo: "img/bct_logo.png",
				descriptions: [
					"Converted existing data processing system to a highly scalable concurrent system that can process thousands of calls per second",
					"Coordinated migration of AWS servers to own servers, reducing monthly server costs by over 60%.",
					"Managed and architected new features for a realtime reporting web application that retrieves, processes and analyzes VOIP phone call data.",
					"Created a collection of scheduled tests to automatically check the application and return a report of its state."
				],
				technologies: "Django, AngularJS, Bootstrap, Nginx, Celery, Selenium, Redis, PostgreSQL"
			},
			{
				title: "Junior Full Stack Software Developer",
				address: "BroadConnect Telecom - Toronto, Ontario",  
				date: "May, 2016 - November, 2017",
				logo: "img/bct_logo.png",
				descriptions: [
					"Developed and maintained a realtime reporting web application that retrieves, processes and analyzes VOIP phone call data.",
					"Maintained a low error rate using regression testing with over 80% code coverage, and developed in-house automation tools with Selenium.",
					"Made changes to frontend to make the website more responsive and improve cross-browser compatibility."
				],
				technologies: "Django, AngularJS, Bootstrap, Nginx, Celery, Selenium, Redis, PostgreSQL, AWS"
			}
		];
	}

	generateJobDescriptions(job) {
		var descriptions = [];

		for(var i =0; i < job.descriptions.length; i++) {
			descriptions.push(
				<li key={i}>
					{job.descriptions[i]}
				</li>
			);
		}
		
		descriptions.push(
			<li key={job.descriptions.length + 1}>
				<strong>Technologies:</strong> {job.technologies}
			</li>
		);

		return descriptions;
	}

	generateJobHtml() {
		var jobs = [];

		for(var i = 0; i < this.jobs.length; i++){
			jobs.push(
				<div key={i} className="jobDescriptionWrapper">
					<div className="logoWrapper">
						<img className="logo" src={this.jobs[i].logo} />
						<div>
							<h2 className="jobTitle">{this.jobs[i].title}</h2>
							<p>{this.jobs[i].address}<span style={{float: "right"}}>{this.jobs[i].date}</span></p>
						</div>
					</div>
					<ul className="jobDescription">
						{
							this.generateJobDescriptions(this.jobs[i])
						}
					</ul>
				</div>
			)
		}

		return jobs;
	}

	render() {
		return (
			<Element name="Experience">
				<section id="experience">
					<header className="sectionHeader">
						Experience
					</header>
					{
						this.generateJobHtml()
					}					
				</section>
			</Element>
		);
	}
}