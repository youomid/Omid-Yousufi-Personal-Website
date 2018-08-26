import React from 'react';
import Introduction from './Introduction';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';

export default class IndexPage extends React.Component {
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
    			<Introduction />
    			<div id="mainWrapper">
    				<Experience />
    				<hr/>
    				<Projects />
    				<hr/>
    				<Education />
    				<hr/>
    				<Skills />
    			</div>
    			<div id="footer">
    				Omid Yousufi | Software Engineer
    			</div>
    		</div>
      </div>
    );
  }
}