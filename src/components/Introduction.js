import React from 'react';

export default class Introduction extends React.Component {

  render() {
    return (
      <div id="intro" className="sectionWrapper">
        <section className="row">
          <div id="introSideBar" className="col-sm-3">
            <img height="125" width="125" src="img/round_profile.png" alt="" />
            <div>Omid Yousufi</div>
            <p>Software Developer</p>
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