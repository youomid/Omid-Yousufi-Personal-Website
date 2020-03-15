import React from 'react';

export default class Skills extends React.Component {
  render() {
    return (
		<div id="navigation" className="row">
			<nav id="nav">
				<ul className="links">
					<li className="active"><a href="index.html">Career</a></li>
				</ul>
				<ul className="icons">
					<li><a href="https://www.linkedin.com/in/omidyousufi/" className="icon fab fa-linkedin"><span className="label">Linkedin</span></a></li>
					<li><a href="https://github.com/youomid" className="icon fab fa-github-square"><span className="label">GitHub</span></a></li>
					<li><a href="/src/static/omid_yousufi_resume.pdf" className="icon fas fa-file"><span className="label">Resume</span></a></li>
				</ul>
			</nav>
		</div>
    );
  }
}