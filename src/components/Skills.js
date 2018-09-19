import React from 'react';

export default class Skills extends React.Component {
  render() {
    return (
		<section id="skills" className="row">
			<div className="col-sm-4">
				<h3>Languages</h3>
				<ul className="skillsList">
					<li className="skill">Python</li>
					<li className="skill">Javascript</li>
					<li className="skill">Java</li>
				</ul>
			</div>
			<div className="col-sm-4">
				<h3>Technologies</h3>
				<ul className="skillsList">
					<li className="skill">Django</li>
					<li className="skill">AngularJS, ReactJS, Redux</li>
					<li className="skill">Bootstrap</li>
					<li className="skill">Redis, PostgreSQL</li>
				</ul>
			</div>
			<div className="col-sm-4">
				<h3>Others</h3>
				<ul className="skillsList">
					<li className="skill">Nginx</li>
					<li className="skill">Celery</li>
					<li className="skill">Selenium</li>
					<li className="skill">Webpack</li>
					<li className="skill">AWS</li>
				</ul>
			</div>
		</section>
    );
  }
}