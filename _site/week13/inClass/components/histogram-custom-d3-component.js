// these are sort of like import statements from python
const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = Object.assign(
  {},
  require('d3'),
  require('d3-transition'),
  require('d3-selection')
);
// loading the react, idyll-d3-component & d3 "libraries"

//const size = 600; // background size in pixels
// probably something to do with the background box
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

class HistogramCustomD3Component extends D3Component {
    // "extends" is probably related to the "d3-component"

  // initializing the visualization
    initialize(node, props) {
	// svg = Support Vector Graphics
    const svg = (this.svg = d3.select(node).append('svg'));
    svg
      .attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    svg
      .append('circle')
      .attr('r', 20) // radius of the circle
      .attr('cx', Math.random() * size)
      .attr('cy', Math.random() * size);
      //.attr('cx',0)
      //.attr('cy', 0);
  }

  // updates visualization -- definitely!
  //update(props, oldProps) {
  //  this.svg
//	  .selectAll('circle')
//	  .transition() // transition to another state
//	  .duration(750) // length of transition (millisec)
//          // below updates x,y center of circle randomly
//	  .attr('cx', Math.random() * size)
//	  .attr('cy', Math.random() * size);
//  }
} // end of HistogramCustomD3Component

module.exports = HistogramCustomD3Component;
