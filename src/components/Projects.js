import React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
    	<div>
			<section className="sectionWrapper row">
				<article className="col-sm-6">
					<header>
						<span className="date">May, 2018 - Present</span>
						<h2><a href="https://github.com/youomid/MeasureMe">MeasureMe</a></h2>
					</header>
					<a href="https://github.com/youomid/MeasureMe" className="image fit"><img src="img/measureme.png" alt="" /></a>
					<p>A personal analytics web application that uses a realtime distributed event processing system to provide insight into a user's productivity.
					<span style={{fontSize:"0.7em"}}><strong>Technologies:</strong> Docker, Angular, Django</span></p>
				</article>
				<article className="col-sm-6">
					<header>
						<span className="date">February, 2018 - April, 2018</span>
						<h2><a href="spritegen/">SpriteGen</a></h2>
					</header>
					<a href="spritegen/" className="image fit"><img src="img/sprite_gen.png" alt="" /></a>
					<p>A web application that procedurally generates 2D pixel sprites using the Pixel Robot algorithm.
					<span style={{fontSize:"0.7em"}}><strong>Technologies:</strong> AngularJS, Express.js</span></p>
				</article>
				<article className="col-sm-6">
					<header>
						<span className="date">January, 2017 - January, 2018</span>
						<h2><a href="tiltorcarry/">TiltOrCarry</a></h2>
					</header>
					<a href="tiltorcarry/" className="image fit"><img src="img/toc_home.png" alt="" /></a>
					<p>A data analytics web application for League Of Legends that uses statistics and machine learning to analyze data.
					<span style={{fontSize:"0.7em"}}><strong>Technologies:</strong> React, Redux, Django, Bootstrap, Nginx, Celery, PostgreSQL, Webpack</span>
					<span style={{fontSize:"0.7em"}}><strong>Algorithms:</strong> Logistic Regression</span></p>
				</article>
				<article className="col-sm-6">
					<header>
						<span className="date">September, 2015 - February, 2016</span>
						<h2><a href="https://play.google.com/store/apps/details?id=com.voltropic.imdo.dynamictimer">Dynamic Timer</a></h2>
					</header>
					<a href="https://play.google.com/store/search?q=dynamic%20timer&hl=en" className="image fit"><img src="img/dynamic_timer.png" alt="" /></a>
					<p>An android mobile application that helps improve productivity through the break point system.
					<span style={{fontSize:"0.7em"}}><strong>Technologies:</strong> Java, XML, SQL, Android Studio</span></p>
				</article>
			</section>
		</div>
    );
  }
}