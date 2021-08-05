---
layout: week
visible: true
icon: undraw_programmer_imem.svg
notitle: true
examples:
  - filename: prep_notebook_week10_and_week11_fall2020
    type: iodide
    title: Prep Iodide Notebook, Week 10
    description: Prep Iodide Notebook
    link: https://alpha.iodide.io/notebooks/7155/
  - filename: prep_notebook_week11
    type: iodidePast
    title: Previous class notebook
    description: Prep Iodide Notebook, Spring 2020
    link: https://alpha.iodide.io/notebooks/4399/
data:
  - filename: GDP.csv
    type: dataLink
    title: The GDP dataset (online)
    description: GDP dataset from FRED (stored online for easy linking in Iodide)
    link: https://uiuc-ischool-dataviz.github.io/is445AOG_fall2020/week01/data/GDP.csv
  - filename: mobility.csv
    type: dataLink
    title: The Mobility dataset (online)
    description: A dataset of USA "mobility" which (I <b>think</b> comes from a <a href="https://www.census.gov/library/working-papers/2018/adrm/CES-WP-18-40R.html">a large census study from 1989-2015</a>) and is collected in several places <a href="http://www.stat.cmu.edu/~cshalizi/uADA/15/hw/01/mobility.csv">including right here</a>.  Here "mobility" is refering to how easy it is for a person to move up in economic status (<a href="http://www.stat.cmu.edu/~cshalizi/uADA/15/hw/01/hw-01.pdf">more info can be found here</a>) based on factors like parental income, location, race, etc.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_spring2021/master/week08/data/mobility.csv
---

# Viz Audience; More Iodide, Javascript & Vega-lite (and maybe Idyll)

<!-- 
## Downloads & Links

### Iodide Notebooks:

 * <a href="https://alpha.iodide.io/notebooks/6217/">Prep Iodide Notebook</a>
 * <a href="https://alpha.iodide.io/notebooks/6219/">In Class Iodide Notebook</a> 
 
 Feel free to check out [Spring 2020's notebook that uses police shooting data for visualization](https://alpha.iodide.io/notebooks/4399/) if you are interestedin other mappable datasets.  
 
### Info about dataset

We will use a dataset of USA "mobility" which (I *think* comes from a [a large census study from 1989-2015](https://www.census.gov/library/working-papers/2018/adrm/CES-WP-18-40R.html)) and is collected in several places [including right here](http://www.stat.cmu.edu/~cshalizi/uADA/15/hw/01/mobility.csv).  Here "mobility" is refering to how easy it is for a person to move up in economic status ([more info can be found here](http://www.stat.cmu.edu/~cshalizi/uADA/15/hw/01/hw-01.pdf)) based on factors like parental income, location, race, etc.

-->

## Installation instructions: Idyll

We'll be using Idyll to do some web-dev and we need to install another package manager, npm, to install Idyll and other Idyll-related packages. 

#### [Please follow these installation instructions to install the necessary packages](installation_instructions_week10).


## Optional reading list

 1. <a href="https://medium.com/multiple-views-visualization-research-explained/same-data-multiple-perspectives-curse-of-knowledge-in-visual-data-communication-d827c381f936">Same Data, Multiple Perspectives</a> 
 2. <a href="https://serialmentor.com/dataviz/telling-a-story.html">FDV, Ch. 29: Telling a story and making a point</a> 
 3. <a href="https://alpha.iodide.io/">Iodide Docs</a> 
 4. <a href="https://vega.github.io/vega-lite/docs/">vega-lite docs</a> - in particular: <a href="https://vega.github.io/vega-lite/docs/transform.html">Vega-lite transformations</a> & <a href="https://vega.github.io/vega-lite/docs/selection.html">Vega-lite selections</a> 
 5. <a href="https://idyll-lang.org/docs"> Idyll Docs</a>

