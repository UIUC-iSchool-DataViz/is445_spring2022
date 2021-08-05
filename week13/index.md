---
layout: week
visible: true
icon: undraw_monitor_iqpq.svg
notitle: true
examples:
  - filename: index.idyll
    type: iodide
    title: Prep index.idyll file, Week 13
    description: We'll be building toward a webpage like <a href="https://jnaiman.github.io/misc/">this</a> today using <a href="https://idyll-lang.org/">Idyll's</a> built-in components. 
    link: https://github.com/UIUC-iSchool-DataViz/is445_spring2021/blob/master/week13/corg/prepIdyll/index.idyll
  - filename: histogram-custom-d3-component.js
    type: iodide
    title: d3.js component 1
    description: Starting histogram component 
    link: https://github.com/UIUC-iSchool-DataViz/is445_spring2021/blob/master/week13/corg/prepIdyll/histogram-custom-d3-component.js
  - filename: histogram-button-custom-d3-component.js
    type: iodide
    title: d3.js component 2
    description: Histogram component + button 
    link: https://github.com/UIUC-iSchool-DataViz/is445_spring2021/blob/master/week13/corg/prepIdyll/histogram-custom-d3-component.js
  - filename: histogram-button-slider-custom-d3-component.js
    type: iodide
    title: d3.js component 3
    description: Histogram component + button + slider
    link: https://github.com/UIUC-iSchool-DataViz/is445_spring2021/blob/master/week13/corg/prepIdyll/histogram-button-slider-custom-d3-component.js
data:
  - filename: corgs_per_country_over_time_columns_2020.csv
    type: dataLink
    title: Corgis per country over time 
    description: This dataset is from the <a href="http://cardiped.net/">Cardigan Archives</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py">scraped using Beautiful Soup in Python</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb">further processed in Python</a> into this form.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgs_per_country_over_time_columns_2020.csv
  - filename: corgiData_countries_subset_2020.json
    type: dataLink
    title: Subset of full Corgi database 
    description: This dataset is from the <a href="http://cardiped.net/">Cardigan Archives</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py">scraped using Beautiful Soup in Python</a> and <a href="https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb">further processed in Python</a> into this form.
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week11/corg/corgiData_countries_subset_2020.json
---

# A few more Idyll+d3 things, Starting SciViz & Guest lecture from the Advanced Visualization Lab 

A few more things in Idyll and d3.js.

<!--
## Downloads & Links

### Idyll Files & Example pages

 1. We'll be building toward a webpage like [this](https://jnaiman.github.io/) today using [Idyll](https://idyll-lang.org/)'s built-in components.
 1. Last week, we got to [this index.idyll file right here](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week12/corg/inClass/index.idyll) and [this custom histogram component](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week12/corg/inClass/histogram-custom-d3-component.js) and we'll start from there this week.
 1. Full Markdown code for this week [available right here](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week13/corg/prepIdyll/index.idyll).
 1. We'll also build a few histogram components like:
    * starting with [this one](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week13/corg/prepIdyll/histogram-custom-d3-component.js)
    * then [this one](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week13/corg/prepIdyll/histogram-button-custom-d3-component.js)
    * and finally [this one](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week13/corg/prepIdyll/histogram-button-slider-custom-d3-component.js)
	

Further examples include:
 * Website from [Spring 2020](https://jnaiman.github.io/items_dataviz_spring2020/) which focuses on using [d3.js](https://d3js.org/) to do many plots since vega-lite was not working well at that time.  The index.idyll file, along with example d3 components and a styles.css file for the final map are in [this subdirectory from that course page here](https://github.com/UIUC-iSchool-DataViz/spring2020/tree/master/week15/corg).



### Data

#### Corgis
 1. <a href="corg/corgs_per_country_over_time_columns_2020.csv" download>Corgis per country over time (corgs_per_country_over_time_columns_2020.csv)</a>
 1. <a href="corg/corgiData_countries_subset_2020.json" download>Subset of full Corgi database (corgiData_countries_subset_2020.json)</a>
     * Full dataset available [here](corg/corgiData_countries_full_2020.json)
	 
This dataset is from the [Cardigan Archives](http://cardiped.net/) and [scraped using Beautiful Soup in Python](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py) and [further processed in Python](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb) into this form.

-->

<!-- #### Galaxy data (if time)

 1. Download and unzip [this set of files here (galaxyFiles.zip, 77M)](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/raw/master/week13/galaxyFiles.zip)
 1. Make note of where this unzips -- this is where `solverlibs.py` gets unpacked.
 
We'll be using the <a href="http://yt-project.org/data/IsolatedGalaxy.tar.gz" download>Isolated Galaxy dataset (292 Mb)</a> dataset for sci viz next week.
-->

## Optional reading list

  1. <a href="https://github.com/d3/d3/wiki">d3.js docs</a> 

**d3.js examples (v4)**
 1. [Simple time-bar chart](https://bl.ocks.org/vikkya/75bda04cd0c00e49cbda6cfee8d97aba) (we used this one to start with)
 1. [Grouped bar chart](https://observablehq.com/@d3/grouped-bar-chart)
 1. [Animated side-bar chart](https://observablehq.com/@d3/bar-chart-race)
 1. [Histogram, binning of data](https://www.d3-graph-gallery.com/graph/histogram_basic.html)


Also, here is a slightly more in-depth explanation of path/ray tracing which we'll talk about more in Week 14:

<iframe width="560" height="315" src="https://www.youtube.com/embed/frLwRLS_ZR0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
