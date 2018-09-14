import React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
		<section>
			<div className="row projects">
				<article className="project col-lg-4">
					<a href="https://github.com/youomid/MeasureMe" className="image fit"><img src="img/measureme.png" alt="" /></a>
					<header>
						<h2><a href="https://github.com/youomid/MeasureMe">MeasureMe</a><span className="floatRight">05/2018 - Present</span></h2>
					</header>
					<div className="projectDescription">
						<p>A personal analytics web application that uses a realtime distributed event processing system to provide insight into a user's productivity.</p>
					</div>
					<div className="technologies">
						<div className="technology">Docker</div>
						<div className="technology">Angular</div>
						<div className="technology">Django</div>
					</div>
				</article>
				<article className="project col-lg-4">
					<a href="spritegen/" className="image fit"><img src="img/sprite_gen.png" alt="" /></a>
					<header>
						<h2><a style={{float:"left"}} href="spritegen/">SpriteGen</a><span className="floatRight">02/2018 - 04/2018</span></h2>
					</header>
					<div className="projectDescription">
						<p>A web application that procedurally generates 2D pixel sprites using the Pixel Robot algorithm.</p>
					</div>
					<div className="technologies">
						<div className="technology">AngularJS</div>
						<div className="technology">ExpressJS</div>
					</div>
				</article>
				<article className="project col-lg-4">
					<a href="tiltorcarry/" className="image fit"><img src="img/toc_home.png" alt="" /></a>
					<header>
						<h2><a href="tiltorcarry/">TiltOrCarry</a><span className="floatRight">01/2017 - 01/2018</span></h2>
					</header>
					<div className="projectDescription">
						<p>A data analytics web application for League Of Legends that uses statistics and machine learning to analyze data.</p>
					</div>
					<div className="technologies">
						<div className="technology">React</div>
						<div className="technology">Redux</div>
						<div className="technology">Django</div>
						<div className="technology">PostgreSQL</div>
						<div className="technology">Logistic Regression</div>
					</div>
				</article>
				<article className="project col-lg-4">
					<a href="https://play.google.com/store/apps/details?id=com.voltropic.imdo.dynamictimer" className="image fit"><img src="img/dynamic_timer.png" alt="" /></a>
					<header>
						<h2><a href="https://play.google.com/store/apps/details?id=com.voltropic.imdo.dynamictimer">Dynamic Timer</a><span className="floatRight">09/2015 - 02/2016</span></h2>
					</header>
					<div className="projectDescription">
						<p>An android mobile application that helps improve productivity through the break point system.</p>
					</div>
					<div className="technologies">
						<div className="technology">Java</div>
						<div className="technology">XML</div>
						<div className="technology">SQL</div>
						<div className="technology">Android Studio</div>
					</div>
				</article>
			</div>
		</section>
    );
  }
}