import React from 'react';

export default class Introduction extends React.Component {

  render() {
    return (
      <div id="intro">
        <section>
          <div id="introText">
            <div className="introduction">
              <div id="introImage">
                <img height="125" width="125" src="img/round_profile copy.png" alt="" />
                <div>Omid Yousufi</div>
                <p id="jobTitle">Full Stack Software Developer</p>
                <p id="location">Toronto, Canada</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}