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

const size = 600;

class CustomD3Component extends D3Component {
  initialize(node, props) {
    const svg = (this.svg = d3.select(node).append('svg'));
    svg
      .attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    svg
      .append('circle')
      .attr('r', 200)
      .attr('cx', Math.random() * size)
      .attr('cy', Math.random() * size);
  }

  update(props, oldProps) {
    this.svg
      .selectAll('circle')
      .transition()
      .duration(750)
      .attr('cx', Math.random() * size)
      .attr('cy', Math.random() * size);
  }
}

module.exports = CustomD3Component;
