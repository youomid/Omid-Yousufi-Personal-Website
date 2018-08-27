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
        case "Education":
          this.setState({ 
            activeComponent: <Education/>,
          });
          break;
        default:
            console.log("Can not switch to that component.");
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
          <div id="header">
            <span onClick={() => { this.setActiveComponent("Introduction")}}>About Me</span> | 
            <span onClick={() => { this.setActiveComponent("Experience")}}>Experience</span> | 
            <span onClick={() => { this.setActiveComponent("Projects")}}>Projects</span> | 
            <span onClick={() => { this.setActiveComponent("Education")}}>Education</span>
          </div>
            { this.state.activeComponent }
    			<div id="footer">
    				Omid Yousufi | Software Engineer
    			</div>
    		</div>
      </div>
    );
  }
}