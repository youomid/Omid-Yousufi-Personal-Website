import React from 'react';

export default class Education extends React.Component {
  render() {
    return (
		<section style={{borderBottom: "solid 2px #eeeeee"}}>
			<header className="sectionHeader">
				Education
			</header>
			<div className="education">
				<img className="schoolLogo" src="img/mcmaster_logo.png" />
				<header>
					<h2>Bachelor of Engineering, Electrical </h2>
					<p style={{marginBottom: ".25rem"}}>McMaster University - Hamilton, Ontario<span className="floatRight">2011 - 2015</span></p>
					<p style={{marginBottom: ".5rem"}}><strong>Courses: </strong>Analog Circuits, Power Systems, etc.</p>
				</header>
			</div>
		</section>
);
  }
}