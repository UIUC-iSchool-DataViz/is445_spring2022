const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

//const size = 600;
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

class HistogramCustomD3Component extends D3Component {
    // initialization function
    initialize(node, props) {
	// Parse the date / time
	var parseDate = d3.isoParse
	// setting x-scale
	var x = d3.scaleBand().rangeRound([0, width], .05).padding(0.1);
	// setting y-scale
	var y = d3.scaleLinear().range([height, 0]);
	// x axis
	var xAxis = d3.axisBottom()
	    .scale(x)
	    //.tickFormat(d3.timeFormat("%b"));
	    .tickFormat(d3.timeFormat("%Y")); // reformat for years in our data
	// y axis
	var yAxis = d3.axisLeft()
	    .scale(y)
	    .ticks(10);

	// start drawing things
	const svg = (this.svg = d3.select(node).append('svg'));
	svg // probably the background object -- background canvas
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform",
		  "translate(" + margin.left + "," + margin.top + ")");

	svg // drawing initial circle -- changed to center and larger
	    //.append('circle')
	    //.attr('r', 200)
	    //.attr('cx', 300)
	    //.attr('cy',300);
  } // end initialization function

  //updating based on our interaction (button push)
  //update(props, oldProps) {
  //  this.svg
  //    .selectAll('circle') // grab the circle
  //    .transition() // transition from old state to new state
  //    .duration(750) // how long transition takes
  //    .attr('cx', Math.random() * size) // change attributes to be new x center
  //    .attr('cy', Math.random() * size); // ... and new y -center
  //}
}

module.exports = HistogramCustomD3Component;
