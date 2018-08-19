import React from 'react';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div >
      	<canvas id="bg-canvas">Error, canvas is not supported</canvas>
      </div>
    );
  }

  componentDidMount() {
  	var canvas = document.getElementById('bg-canvas');
	var context = canvas.getContext('2d');

	// dynamically set height and width
	window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
    	console.log('Resizing canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground()
    }

    resizeCanvas()

    function drawBackground() {
		context.fillStyle = "blue";
		context.fillRect(0, 0, canvas.width, canvas.height);
    }

  }

}