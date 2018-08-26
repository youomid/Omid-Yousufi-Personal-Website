import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class Introduction extends React.Component {

  goToExperienceSection() {
   
  }

  render() {
    return (
      <div id="intro">
        <div >
          <img height="250" width="200" src="/img/profile.jpg" alt="" />
        </div>
        <h1 className="name">Omid Yousufi</h1>
        <p>Software Engineer -  Toronto, Ontario</p>
        <ul className="icons">
          <li><a href="https://www.linkedin.com/in/omidyousufi/" className="fab fa-linkedin"></a></li>
          <li><a href="https://github.com/youomid" className="fab fa-github-square"></a></li>
          <li><a href="omid_yousufi_resume.pdf" className="fas fa-file"></a></li>
        </ul>
        <Link to="firstInsideContainer" smooth={true} duration={800}>
          <span id="arrow" className="fas fa-arrow-circle-down" onClick={this.goToExperienceSection()}></span>
        </Link>
      </div>
    );
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

}