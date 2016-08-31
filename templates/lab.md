
<p class="header" style="font-size: 30pt">
The Wu Lab
<br/>
<small>
Accelerating the Democratization of Data
</small>
</p>

Our lab focuses on building tools and algorithms to facilitate the democratization of data 
and enable everyone to easily interact with, explore, analyze and understand their data.
To achieve this goal we focus on three core problems: 
**interactive data cleaning and preparation tools** so that the data is clean enough for analysis; 
**data exploration and *explanation* tools** so users can identify patterns in the data and understand *why* those patterns exist; 
and **interactive visualization systems** to bridge the gap between database systems, which are currently tailored for data processing, and visualization systems, which are tailored to visualization.


<p id="contacts">
  <a href="#reading">Reading Group</a>
  <a href="#projects">Current Projects</a>
  <a href="#funprojects">Fun</a>
  <a href="#students">Students</a>
</p>


# Reading Group <a name="reading"></a>

Our paper reading group regularly meets at **3:30-5PM Wednesdays** in **417 MUDD**.  
We spend part of the time discussing the technical ideas in the paper, and part of the time dissecting how the introduction is written. 
Everyone is welcome to attend!

[Click here to see our reading list and notes](https://quip.com/Rv0rANRyWmeK)



# Current Projects <a name="projects"></a>

## [Data Visualization Management Systems](./dvms.html)

<img class="logo" id="dvmslogo" src="./images/dvms.png" />

A Data Visualization Management System (DVMS) integrates
visualizations and databases, by compiling a declarative visualization
language into an end-to-end relational operator pipeline that renders
the visualization and is amenable to database-style optimizations.
Thus the DVMS can be both <i>expressive</i> via the
visualization language, and <i>performant</i>
by leveraging traditional and visualization-specific
optimizations to scale interactive visualizations to massive
datasets.

## [Query Explanation](./qfix.html)

Instead of explaining and fixing data using data, which is a bit circuitous,
we seek to both explain and repair incorrect data values by using the actual
queries that modified the database.

<img class="screenshot" id="qfixscreen" src="./images/qfix.png" />


## [Data Exploration and Explanation](./dbwipes.html)

Visualizations are excellent for exposing surprising patterns
and outliers in data, however existing tools have no way to
help explain those patterns and outliers.  We are exploring 
systems to generate sensible explanations for outliers in 
analytics visualizations.

<img class="screenshot" id="scorpionscreen" src="./images/scorpion.png" />


## [Data Cleaning for Data Science](https://activeclean.github.io)

Analysts report spending upwards of 80% of their time on problems in data cleaning including extraction, formatting, handling missing values, and entity resolution. 
How can knowing the application you want to _actually_ run help speed up the cleaning process?

<img class="screenshot" id="samplecleanscreen" src="./images/previews/preview_activeclean-vldb16.png" />



# Fun <a name="funprojects"></a>


## [Latex Snapshots](http://www.github.com/sirrice/latexsnapshots)

Point **latexsnapshots** to your git repo, and it will go through the commits and identify those that change your tex files in a significant way, and regenerate the pdf files. It will also take thumbnails of those pdfs, and show them in a web UI.


  <a href="http://www.github.com/sirrice/latexsnapshots">
    <img class="screenshot" id="latexsnapshots-img" src="https://raw.githubusercontent.com/sirrice/latexsnapshots/master/latexsnapshots/static/screenshot.png"  />
  </a>


## <a href="./vldbtrends/">VLDB conference trends</a></h2>

A history of databases through keyword trends in VLDB publication titles

  <a href="./vldbtrends/">
  <img class="screenshot" id="vldb-trends" src="./images/vldb-trends.png"  />
  </a>

## [Python ggplot2 syntax](http://www.github.com/sirrice/pygg)

A python wrapper around ggplot2 that provides nearly the same syntax, but in python.

      from pygg import *

      # Example using diamonds dataset (comes with ggplot2)
      p = ggplot('diamonds', aes('carat', y='price'))
      g = geom_point() + facet_wrap(None, "color")
      ggsave("test1.pdf", p+g, data=None)

## [bibcleaner](https://github.com/sirrice/bibcleaner)

GUI interface to normalize and clean up entries in bibtex files to reduce the references section and make the bibtex more managable.

  <a href="https://github.com/sirrice/bibcleaner">
  <img class="screenshot" id="bibcleaner-img" src="https://raw.githubusercontent.com/sirrice/bibcleaner/master/screenshot.png"/>
  </a>





# Students <a name="students"></a>

I am lucky to be working, and have worked, with many remarkable students.

## PhD

* [Fotis Psallidas](http://www.cs.columbia.edu/~fotis/)
* [Xiaolan Wang](https://people.cs.umass.edu/~xlwang/) <small>(UMaas Amherst, advised by Alexandra Meliou)</small>
  * QFix: explaining database errors using query histories
* [Yifan Wu](http://www.cs.berkeley.edu/~yifanwu/) <small>(UC Berkeley, Joe Hellerstein)</small>
  * Consistency in **De**clarative **V**isual **I**nteractive **L**anguages (DeVIL)
* [Sanjay Krishnan](https://www.ocf.berkeley.edu/~sanjayk/) <small>(UC Berkeley, advised by Michael Franklin, Ken Goldberg)</small>
  * Data cleaning and machine learning
* [Daniel Haas](http://www.cs.berkeley.edu/~dhaas/) <small>(UC Berkeley, advised by Michael Franklin)</small>
  * Making crowds _fast_
* [Laura Rettig](http://exascale.info/members/laura-rettig/) <small>(Fribourg University, advised by Philippe Cudre-Mauroux)</small>
* [Lilong Jiang](http://web.cse.ohio-state.edu/~jianglil/) <small>(Ohio State, advised by Arnab Nandi)</small>
  * Human graphical perception

## Masters

* [Daniel Alabi](http://alabidan.me/) <small>(starting PhD at Harvard)</small>
  * Using human perceptual models to make visualizations faster
* [Zhengjie Miao](http://www.miaozhengjie.com/about/)
  * Predictiong user interactions to make visualizations fasters and better
* Sharan Suryanarayanan

## Undergrads

* [Hamed Nilforoshan](http://hamedn.com/)
* Rahul Khanna
* James Sands
* HaoCi Zhang <small>(Tsinghua University)</small>






# Older Projects <a name="olderprojects"></a>

## [Data Import](https://github.com/sirrice/dbtruck)

A tool to import your data into whatever data store you want, 
as painlessly as possible.  

See <a href="http://scripts.mit.edu/~eugenewu/wp/archives/327">article for motivation</a>



## [Qurk](http://db.csail.mit.edu/qurk/) and Crowd-sourcing

A look at optimizing human computation through a database lens.  Qurk is a
database prototype that enables users to write queries that compute results from
both machines and humans.  With <a href="http://people.csail.mit.edu/marcua/">adam marcus</a>.


## WebTables

A look into the properties of structured data at the internet scale. With
<a href="http://web.eecs.umich.edu/~michjc/">michael cafarella</a>, <a href="http://yz.mit.edu/">yang zhang</a>,
<a href="http://www.cs.washington.edu/homes/nodira/Nodira_Khoussainova.html">nodira k.</a>,
<a href="http://www.cise.ufl.edu/~daisyw/">daisy wang</a> and <a href="http://www.cs.washington.edu/homes/alon/">alon halevy</a>.</p>


## [SASE](http://sase.cs.umass.edu/) 

System for declaratively filtering and correlating streams
of events from sensor and rfid devices.  Extends
<a href="http://yfilter.cs.umass.edu/">YFilter's</a> core
query processing engine.  With <a href="http://people.cs.umass.edu/~yanlei/">yanlei diao</a> and <a href="http://people.cs.umass.edu/~dpg/">daniel gyllstrom</a>.

## [HiFi@Berkeley](http://hifi.cs.berkeley.edu/home/events/bears_05.html)

A Cascading Stream Architecture for Large-Scale Receptor-Based Networks.  With the
<a href="http://db.cs.berkeley.edu/">berkeley db group</a> and notably <a href="http://www.funkymonkeyland.net/">shawn jeffrey</a>
and <a href="http://www.rizvi.org/">shariq rizvi</a>

## Waapsi

An experimental course scheduling system.  Tries to make the
user experience not suck by using JS.  This was around the time google
calendar came out.  With <a href="https://twitter.com/#!/sukhchander">sukhchander khanna</a>


## Relational Grammar of Graphics 

Exploration of translation from grammar of graphics to a relational query plan with simple provenance support integrated out-of-the-box.  

[source on github](https://github.com/sirrice/gg/)

<div class='screenshot' id="ggscreen"></div>


# Educational


## [Big data course@MIT](http://db.csail.mit.edu/6.885/)

I co-developed the "big data" course at MIT.  The class surveys techniques and systems for ingesting, efficiently processing, analyzing, and visualizing large data sets. Topics will include data cleaning, data integration, scalable systems (relational databases, NoSQL, Hadoop, etc.), analytics (data cubes, scalable statistics and machine learning), and scalable visualization of large data sets.

The goal is for students to gain working experience of the topics and systems that are covered.

## [Introduction to Data Literacy](http://dataiap.github.com/)

I co-taught a heavily lab-based IAP class called <a href="http://dataiap.github.com/">Introduction to Data Literacy</a>
that introduces students to many basic data cleaning, analysis, and visualization techniques.  The
course was added to <a href="http://ocw.mit.edu/resources/res-6-009-how-to-process-analyze-and-visualize-data-january-iap-2012/index.htm">OCW</a>.
With my buddy <a href="http://people.csail.mit.edu/marcua/">adam marcus</a>.

## [MEET](http://meet.mit.edu) -- Middle Eastern Education through Technology

MEET strives to bridge the gap between future Israeli and Palestinian
leaders by immersing them together for 3 full years of fun and education.  MIT
business and technical instructors work in the Middle East for a month-long
intensive session during the summer.  I was one of four Year 3 technical
instructors in 2010, and helped head the curriculum team for the past 3
years






<!--
# Past Jobs

* Google Internship in Webtables research project.  <small>Spring 2007 - Winter 2008</small></li>
* UC Berkeley Database Teaching Assistant.  <small>Fall 2006</small></li>
* Yahoo Internship in RDF Databases.  <small>Summer 2006.</small></li>
* Microsoft Internship in Exchange Server. <small>Summer 2005.</small></li>
* IBM Extreme Blue. <small>Spring 2005.</small></li>

-->


<link href='https://fonts.googleapis.com/css?family=Source+Code+Pro:300' rel='stylesheet' type='text/css'>


