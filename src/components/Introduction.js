import React from 'react';

export default class Introduction extends React.Component {

  render() {
    return (
      <div id="intro">
        <section>
          <div id="introText">
            <div className="introduction">
              <div id="introImage">
                <div className="imageCropper">
                  <img src="img/round_profile copy.png" alt="" />
                </div>
                <div>Omid Yousufi</div>
                <p id="jobTitle">Full Stack Software Developer - Toronto, Canada</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}