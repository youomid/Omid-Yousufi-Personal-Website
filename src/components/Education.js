import React from 'react';

export default class Education extends React.Component {
  render() {
    return (
    	<div>
			<section className="whiteSpace sectionWrapper" >
				<header className="major">
					<h1>Education</h1>
				</header>
				<img className="schoolLogo" src="img/mcmaster_logo.png" />
				<header>
					<h2>Bachelor of Engineering, Electrical </h2>
					<p className="margin0">McMaster University - Hamilton, Ontario<span className="floatRight">2011 - 2015</span></p>
					<p className="margin0"><strong>Courses: </strong>Analog Circuits, Power Systems, etc.</p>
					<p><strong>Senior Capstone Project: </strong></p>
				</header>
			</section>
		</div>
    );
  }
}