import React from 'react';

export default class Skills extends React.Component {

	constructor(props){
		super(props);
		this.languages = ["Python", "JavaScript", "HTML/CSS"];
		this.technologies = ["Django", "AngularJS, ReactJS, Redux", "Bootstrap", "Redis, PostgreSQL"];
		this.others = ["RabbitMQ", "Celery", "Selenium", "AWS"];
	}

	generateLanguagesHtml() {
		var languages = [];

		for(var i =0; i < this.languages.length; i++) {
			languages.push(
				<li key={i} className="skill">
					{this.languages[i]}
				</li>
			);
		}

		return languages;
	}

	generateTechnologiesHtml() {
		var technologies = [];

		for(var i =0; i < this.technologies.length; i++) {
			technologies.push(
				<li key={i} className="skill">
					{this.technologies[i]}
				</li>
			);
		}

		return technologies;
	}

	generateOthersHtml() {
		var others = [];

		for(var i =0; i < this.others.length; i++) {
			others.push(
				<li key={i} className="skill">
					{this.others[i]}
				</li>
			);
		}

		return others;
	}

	render() {
		return (
			<section id="skills" className="row">
				<div className="col-sm-4">
					<h3>Languages</h3>
					<ul className="skillsList">
						{
							this.generateLanguagesHtml()
						}
					</ul>
				</div>
				<div className="col-sm-4">
					<h3>Technologies</h3>
					<ul className="skillsList">
						{
							this.generateTechnologiesHtml()
						}
					</ul>
				</div>
				<div className="col-sm-4">
					<h3>Others</h3>
					<ul className="skillsList">
						{
							this.generateOthersHtml()
						}
					</ul>
				</div>
			</section>
		);
	}
}