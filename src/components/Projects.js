import React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
    	<div>
			<section className="sectionWrapper">
				<header className="major">
					<h1>Projects</h1>
				</header>
				<div className="row">
					<article className="project col-sm-6">
						<header>
							<p>May, 2018 - Present</p>
							<h2><a href="https://github.com/youomid/MeasureMe">MeasureMe</a></h2>
						</header>
						<a href="https://github.com/youomid/MeasureMe" className="image fit"><img src="img/measureme.png" alt="" /></a>
						<p>A personal analytics web application that uses a realtime distributed event processing system to provide insight into a user's productivity.</p>
						<div style={{fontSize:"0.7em"}}><strong>Technologies:</strong> Docker, Angular, Django</div>
					</article>
					<article className="project col-sm-6">
						<header>
							<p>February, 2018 - April, 2018</p>
							<h2><a href="spritegen/">SpriteGen</a></h2>
						</header>
						<a href="spritegen/" className="image fit"><img src="img/sprite_gen.png" alt="" /></a>
						<p>A web application that procedurally generates 2D pixel sprites using the Pixel Robot algorithm.</p>
						<div style={{fontSize:"0.7em"}}><strong>Technologies:</strong> AngularJS, Express.js</div>
					</article>
					<article className="project col-sm-6">
						<header>
							<p>January, 2017 - January, 2018</p>
							<h2><a href="tiltorcarry/">TiltOrCarry</a></h2>
						</header>
						<a href="tiltorcarry/" className="image fit"><img src="img/toc_home.png" alt="" /></a>
						<p>A data analytics web application for League Of Legends that uses statistics and machine learning to analyze data.</p>
						<div style={{fontSize:"0.7em"}}><strong>Technologies:</strong> React, Redux, Django, Bootstrap, Nginx, Celery, PostgreSQL, Webpack</div>
						<div style={{fontSize:"0.7em"}}><strong>Algorithms:</strong> Logistic Regression</div>
					</article>
					<article className="project col-sm-6">
						<header>
							<p>September, 2015 - February, 2016</p>
							<h2><a href="https://play.google.com/store/apps/details?id=com.voltropic.imdo.dynamictimer">Dynamic Timer</a></h2>
						</header>
						<a href="https://play.google.com/store/apps/details?id=com.voltropic.imdo.dynamictimer" className="image fit"><img src="img/dynamic_timer.png" alt="" /></a>
						<p>An android mobile application that helps improve productivity through the break point system.</p>
						<div style={{fontSize:"0.7em"}}><strong>Technologies:</strong> Java, XML, SQL, Android Studio</div>
					</article>
				</div>
			</section>
		</div>
    );
  }
}