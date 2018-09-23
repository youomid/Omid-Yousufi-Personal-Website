import React from 'react';

export default class Projects extends React.Component {

	constructor(props){
		super(props);
		this.projects = [
			{
				name: "MeasureMe",
				date: "05/2018 - Present",
				link: "https://github.com/youomid/MeasureMe",
				image: "img/measureme.png",
				description: "A personal analytics web application that uses a realtime distributed event processing system to provide insight into a user's productivity.",
				technologies: ["Docker", "Angular6", "Django"]
			},
			{
				name: "SpriteGen",
				date: "02/2018 - 04/2018",
				link: "spritegen/",
				image: "img/sprite_gen.png",
				description: "A web application that procedurally generates 2D pixel sprites using the Pixel Robot algorithm.",
				technologies: ["AngularJS", "ExpressJS"]
			},
			{
				name: "TiltOrCarry",
				date: "01/2017 - 01/2018",
				link: "tiltorcarry/",
				image: "img/toc_home.png",
				description: "A data analytics web application for League Of Legends that uses statistics and machine learning to analyze data.",
				technologies: ["React", "Redux", "Django", "Celery", "PostgreSQL", "Logistic Regression"]
			},
			{
				name: "Dynamic Timer",
				date: "09/2015 - 02/2016",
				link: "https://play.google.com/store/apps/details?id=com.voltropic.imdo.dynamictimer",
				image: "img/dynamic_timer.png",
				description: "An android mobile application that helps improve productivity through the break point system.",
				technologies: ["Java", "XML", "SQL", "Android Studio"]
			},
		];
	}

	generateTechnologies(project) {
		var technologies = [];

		for(var i =0; i < project.technologies.length; i++) {
			technologies.push(
				<div key={i} className="technology">
					{project.technologies[i]}
				</div>
			);
		}

		return technologies;
	}

	generateProjectHtml() {
		var projects = [];

		for(var i = 0; i < this.projects.length; i++){
			projects.push(
				<article key={i} className="project col-lg-6">
					<header style={{textAlign: "center", "marginBottom": "1rem"}}>
						<p>{this.projects[i].date}</p>
						<h2><a href={this.projects[i].link}>{this.projects[i].name}</a></h2>
					</header>
					<a href={this.projects[i].link} className="image fit"><img src={this.projects[i].image} alt="" /></a>
					<div className="projectDescription">
						<p>{this.projects[i].description}</p>
					</div>
					<div className="technologies">
						{
							this.generateTechnologies(this.projects[i])
						}
					</div>
				</article>
			)
		}

		return projects;
	}

	render() {
		return (
			<section style={{borderBottom: "solid 2px #eeeeee"}}>
				<header className="sectionHeader">
					Projects
				</header>
				<div className="row projects">
					{
						this.generateProjectHtml()
					}
				</div>
			</section>
		);
	}
}