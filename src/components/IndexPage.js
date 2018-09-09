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

  highlightComponent(component) {
    //TODO: underline the selected component in the header

    // first, remove highlighted component using state info

    // second, highlight the selected component and update state info
  }

  setActiveComponent(component){
    switch(component) {
        case "Introduction":
          this.setState({ 
            activeComponent: <Introduction/>,
          });
          break;
        case "Experience":
          this.setState({ 
            activeComponent: <Experience/>,
          });
          break;
        case "Projects":
          this.setState({ 
            activeComponent: <Projects/>,
          });
          break;
        default:
            console.log("Can not switch to that component.");
    }
    this.highlightComponent(component)
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
          <div id="header">
            <span id="introductionNav" onClick={() => { this.setActiveComponent("Introduction")}}>About Me</span> | 
            <span id="experienceNav"  onClick={() => { this.setActiveComponent("Experience")}}>Experience</span> | 
            <span id="projectsNav"  onClick={() => { this.setActiveComponent("Projects")}}>Projects</span> 
          </div>
            { this.state.activeComponent }
    			<div id="footer">
    				<span>Omid Yousufi</span> | <span>Full Stack Software Developer</span>
    			</div>
    		</div>
      </div>
    );
  }
}