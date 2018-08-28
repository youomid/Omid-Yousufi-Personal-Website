import React from 'react';

export default class Introduction extends React.Component {

  render() {
    return (
      <div id="intro" className="sectionWrapper">
        <section className="row">
          <div className="col-sm-3 sidebar">
            <div id="introSideBar">
              <img height="125" width="125" src="img/round_profile.png" alt="" />
              <div>Omid Yousufi</div>
              <p>Full Stack Software Developer</p>
            </div>
            <div id="skills">
              <div id="myTechnologies">
                Technologies
                <ul>
                  <li>Django</li>
                  <li>AngularJS, ReactJS, Redux</li>
                  <li>Redis, PostgreSQL</li>
                </ul>
              </div>
              <div id="languages">
                Languages
                <ul>
                  <li>Python</li>
                  <li>Javascript</li>
                  <li>Golang</li>
                </ul>
              </div>
              <div id="others">
                Others
                <ul>
                  <li>Nginx</li>
                  <li>Celery</li>
                  <li>RabbitMQ</li>
                  <li>AWS</li>
                  <li>Ubuntu</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="introText" className="col-sm-9">
            <p>
              Hello, I am Omid Yousufi! I am a full stack
              software developer working in Toronto. I graduated from
              McMaster University with a bachelor's in engineering.
            </p>
          </div>
        </section>
      </div>
    );
  }

}