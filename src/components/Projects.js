import React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
		<section style={{borderBottom: "solid 2px #eeeeee"}}>
			<header className="sectionHeader">
				Projects
			</header>
			<div className="row projects">
				<article className="project col-lg-6">
					<header style={{textAlign: "center"}}>
						<p>05/2018 - Present</p>
						<h2><a href="https://github.com/youomid/MeasureMe"></a>MeasureMe</h2>
					</header>
					<a href="https://github.com/youomid/MeasureMe" className="image fit"><img src="img/measureme.png" alt="" /></a>
					<div className="projectDescription">
						<p>A personal analytics web application that uses a realtime distributed event processing system to provide insight into a user's productivity.</p>
					</div>
					<div className="technologies">
						<div className="technology">Docker</div>
						<div className="technology">Angular</div>
						<div className="technology">Django</div>
					</div>
				</article>
				<article className="project col-lg-6">
					<header style={{textAlign: "center"}}>
						<p>02/2018 - 04/2018</p>
						<h2><a href="spritegen/"></a>SpriteGen</h2>
					</header>
					<a href="spritegen/" className="image fit"><img src="img/sprite_gen.png" alt="" /></a>
					<div className="projectDescription">
						<p>A web application that procedurally generates 2D pixel sprites using the Pixel Robot algorithm.</p>
					</div>
					<div className="technologies">
						<div className="technology">AngularJS</div>
						<div className="technology">ExpressJS</div>
					</div>
				</article>
				<article className="project col-lg-6">
					<header style={{textAlign: "center"}}>
						<p>01/2017 - 01/2018</p>
						<h2><a href="tiltorcarry/"></a>TiltOrCarry</h2>
					</header>
					<a href="tiltorcarry/" className="image fit"><img src="img/toc_home.png" alt="" /></a>
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
				<article className="project col-lg-6">
					<header style={{textAlign: "center"}}>
						<p>09/2015 - 02/2016</p>
						<h2><a href="https://play.google.com/store/apps/details?id=com.voltropic.imdo.dynamictimer"></a>Dynamic Timer</h2>
					</header>
					<a href="https://play.google.com/store/apps/details?id=com.voltropic.imdo.dynamictimer" className="image fit"><img src="img/dynamic_timer.png" alt="" /></a>
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