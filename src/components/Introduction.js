import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


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
                <div id="name">Omid Yousufi</div>
                <p id="jobTitle">Full Stack Software Developer - Toronto, Canada</p>
                <ul className="arrow">
                  <li>
                  <Link to="Experience" smooth={true} duration={800}>
                    <span className="fas fa-arrow-circle-down"></span>
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
            </div>
        </section>
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