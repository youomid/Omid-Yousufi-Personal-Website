import React from 'react';
import Introduction from './Introduction';
import Experience from './Experience';
import Projects from './Projects';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div >
      	<canvas id="bgCanvas">Error, canvas is not supported</canvas>
      	<div className="foreground">
			<Introduction />
			<div id="mainWrapper">
				<Experience />
				<Projects />
			</div>
		</div>
      </div>
    );
  }

  componentDidMount() {
  	this.setupCanvas()
  }

  setupCanvas() {
  	var canvas = document.getElementById('bgCanvas');
	var context = canvas.getContext('2d');

	// dynamically set height and width of canvas based on viewport
	window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
    	console.log('Resizing canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground()
    }

    resizeCanvas()

    function drawBackground() {
		context.fillStyle = "#f0f7ff";
		context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

}