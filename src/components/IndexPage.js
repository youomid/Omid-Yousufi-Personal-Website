import React from 'react';
import Introduction from './Introduction';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';

export default class IndexPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeComponent: <Introduction/>,
    }
  }

  render() {
    return (
      <div >
        <div className="background" style={{color: "#fff"}}>
          <div id="snow1">
          </div>
          <div id="snow2">
          </div>
          <div id="snow3">
          </div>
        </div>
      	<div className="foreground">
          <div className="aligner">
            <Introduction></Introduction>
            <div className="sectionWrapper">
              <Experience></Experience>
              <Projects></Projects>
              <Education></Education>
              <Skills></Skills>
            </div>
          </div>
    			<div id="footer">
    				<span>Omid Yousufi</span> | <span>Full Stack Software Developer</span>
    			</div>
    		</div>
      </div>
    );
  }
}