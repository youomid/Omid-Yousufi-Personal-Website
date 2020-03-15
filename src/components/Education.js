import React from 'react';

export default class Education extends React.Component {

	constructor(props){
		super(props);
		this.education = [
			{
				degree: "Bachelor of Engineering, Electrical",
				date: "2011 - 2015",
				logo: "src/static/img/mcmaster_logo.png",
				address: "McMaster University - Hamilton, Ontario",
			}
		];
	}

	generateEducationHtml() {
		var education = [];

		for(var i =0; i < this.education.length; i++) {
			education.push(
				<div key={i} className="education">
					<img className="schoolLogo" src={this.education[i].logo} />
					<header style={{paddingTop: "1rem"}}>
						<h2>{this.education[i].degree}</h2>
						<p style={{marginBottom: ".25rem"}}>{this.education[i].address}<span style={{float:"right"}}>{this.education[i].date}</span></p>
					</header>
				</div>
			);
		}

		return education;
	}

	render() {
		return (
			<section style={{borderBottom: "solid 2px #eeeeee"}}>
				<header className="sectionHeader">
					Education
				</header>
				{
					this.generateEducationHtml()
				}
			</section>
		);
	}
}