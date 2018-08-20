import React from 'react';

export default class Education extends React.Component {
  render() {
    return (
    	<div>
			<section className="whiteSpace sectionWrapper" >
				<header className="major">
					<h1>Education</h1>
				</header>
				<img className="logo" src="img/mcmaster_logo.png" />
				<header>
					<h2>Bachelor of Engineering, Electrical </h2>
					<p>McMaster University - Hamilton, Ontario<span className="floatRight">2011 - 2015</span></p>
				</header>
			</section>
		</div>
    );
  }
}