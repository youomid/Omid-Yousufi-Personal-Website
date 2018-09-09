import React from 'react';

export default class Introduction extends React.Component {

  render() {
    return (
      <div id="intro" className="sectionWrapper">
        <section className="row">
          <div className="col-sm-3 sidebar">
            <div id="introSideBar">
              <img height="125" width="125" src="img/round_profile copy.png" alt="" />
              <div>Omid Yousufi</div>
              <p id="jobTitle">Full Stack Software Developer</p>
              <p id="location">Toronto, Canada</p>
            </div>
            <div id="skills">
              <div id="myTechnologies">
                <div>
                  Technologies
                </div>
                <ul className="technologies">
                  <li className="technology">Django</li>
                  <li className="technology">AngularJS</li>
                  <li className="technology">ReactJS</li>
                  <li className="technology">Redux</li>
                  <li className="technology">Redis</li>
                  <li className="technology">PostgreSQL</li>
                </ul>
              </div>
              <div id="languages">
                <div>
                  Languages
                </div>
                <ul className="technologies">
                  <li className="technology">Python</li>
                  <li className="technology">Javascript</li>
                </ul>
              </div>
              <div id="others">
                <div>
                  Others
                </div>
                <ul className="technologies">
                  <li className="technology">Nginx</li>
                  <li className="technology">Celery</li>
                  <li className="technology">RabbitMQ</li>
                  <li className="technology">AWS</li>
                  <li className="technology">Ubuntu</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="introText" className="col-sm-9">
            <p style={{fontSize: "3rem"}}> 
              Hello, I'm Omid Yousufi!
            </p>
            <div className="row">
              <p className="col-lg-8" style={{fontSize: "1.5rem"}}>
                I am a full stack software developer working in Toronto. In my spare time, I work on side projects exploring
                different areas such as distributed systems design, machine learning, and procedural generation.
              </p>
              <div className="col-lg-4" style={{fontSize: "1.25rem"}}>
                <ul id="introLinks">
                  <li><span><i className="fas fa-envelope"></i></span>email@email.com</li>
                  <li><span><i className="fas fa-file"></i></span>resume.pdf</li>
                  <li><span><i className="fab fa-github-square"></i></span>github</li>
                  <li><span><i className="fab fa-linkedin"></i></span>linkedin</li>
                </ul>
              </div>
            </div>
            <div className="education">
              <img className="schoolLogo" src="img/mcmaster_logo.png" />
              <header>
                <h2>Bachelor of Engineering, Electrical </h2>
                <p className="margin0">McMaster University - Hamilton, Ontario<span className="floatRight">2011 - 2015</span></p>
                <p className="margin0"><strong>Courses: </strong>Analog Circuits, Power Systems, etc.</p>
                <p><strong>Senior Capstone Project: X-Y Plotter</strong></p>
              </header>
            </div>
          </div>
        </section>
      </div>
    );
  }

}