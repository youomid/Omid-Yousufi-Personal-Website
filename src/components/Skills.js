import React from 'react';

export default class Skills extends React.Component {
  render() {
    return (
		<div id="skills" className="row">
			<div className="col-sm-4">
				<h3>Languages</h3>
				<ul className="skillsList">
					<li className="paddingLeft">Python</li>
					<li className="paddingLeft">Javascript</li>
					<li className="paddingLeft">Java</li>
				</ul>
			</div>
			<div className="col-sm-4">
				<h3>Technologies</h3>
				<ul className="skillsList">
					<li className="paddingLeft">Django</li>
					<li className="paddingLeft">AngularJS, ReactJS, Redux</li>
					<li className="paddingLeft">Bootstrap</li>
					<li className="paddingLeft">Redis, PostgreSQL</li>
				</ul>
			</div>
			<div className="col-sm-4">
				<h3>Others</h3>
				<ul className="skillsList">
					<li className="paddingLeft">Nginx</li>
					<li className="paddingLeft">Celery</li>
					<li className="paddingLeft">Selenium</li>
					<li className="paddingLeft">Webpack</li>
					<li className="paddingLeft">AWS</li>
				</ul>
			</div>
		</div>
    );
  }
}