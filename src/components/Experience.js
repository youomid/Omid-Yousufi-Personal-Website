import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



export default class Experience extends React.Component {

	constructor(props){
		super(props);
		this.jobs = [
			{
				title: "Full Stack Software Developer",
				address: "BroadConnect Canada - Toronto, Ontario",  
				date: "November, 2017 - August 2019",
				logo: "src/static/img/bct_logo.png",
				descriptions: [
					"Upgraded to Blue-Green architecture to improve the software redundancy enabling zero downtime deployments, failover, and load balancing.",
					"Converted existing data processing system to a highly scalable concurrent system that can process tens of thousands of calls per second.",
					"Coordinated migration of services from AWS to on-premise servers, reducing monthly costs by over 60%. migration of AWS servers to on-premise servers.",
					"Optimized an AngularJS based frontend to display large amounts of realtime and historical call data without sacrificing performance.",
					"Developed REST api's following security best practices and optimizing performance to minimize server/database load."
				],
				technologies: "Django, AngularJS, React, RabbitMQ, Redis, Postgres"
			},
			{
				title: "Junior Full Stack Software Developer",
				address: "BroadConnect Canada - Toronto, Ontario",  
				date: "May, 2016 - November, 2017",
				logo: "src/static/img/bct_logo.png",
				descriptions: [
					"Worked on an event processing system using celery and rabbitmq to create metrics that provides user with business intelligence.",
					"Maintained a low error rate using regression testing with over 80% code coverage, and developed in-house automation tools with Selenium.",
					"Made changes to improve the responsiveness, accessibility, and cross-browser compatibility of the web application.",
					"Built responsive reports and dashboards using Bootstrap."
				],
				technologies: "Django, AngularJS, Selenium, Celery, AWS, Bootstrap"
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