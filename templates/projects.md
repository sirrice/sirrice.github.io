
# Current and Past Projects



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


## [Data Exploration and Explanation](./dbwipes.html)

Visualizations are excellent for exposing surprising patterns
and outliers in data, however existing tools have no way to
help explain those patterns and outliers.  We are exploring 
systems to generate sensible explanations for outliers in 
analytics visualizations.

<img class="screenshot" id="scorpionscreen" src="./images/scorpion.png" />


## [Data Cleaning Systems](http://www.sampleclean.org)

Analysts report spending upwards of 80% of their time on problems in data cleaning including extraction, formatting, handling missing values, and entity resolution. 
The SampleClean project explores scalable techniques for data cleaning, crowd sourced data cleaning, and statistical inference on dirty data.

<img class="screenshot" id="samplecleanscreen" src="./images/sampleclean.png" />


## [Data Import](https://github.com/sirrice/dbtruck)

A tool to import your data into whatever data store you want, 
as painlessly as possible.  

See <a href="http://scripts.mit.edu/~eugenewu/wp/archives/327">article for motivation</a>



# [Qurk](http://db.csail.mit.edu/qurk/) and Crowd-sourcing

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

## [introduction to Data Literacy](http://dataiap.github.com/

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





# Fun

## <a href="http://web.mit.edu/~eugenewu/Public/vldb/">VLDB conference trends</a></h2>

A history of databases through keyword trends in VLDB publication titles

  <a href="http://web.mit.edu/~eugenewu/Public/vldb/">
  <img class="screenshot" id="vldb-trends" src="./images/vldb-trends.png"  />
  </a>

## [Python ggplot2 syntax](http://www.github.com/sirrice/pygg)

A python wrapper around ggplot2 that provides nearly the same syntax, but in python.

      from pygg import *

      # Example using diamonds dataset (comes with ggplot2)
      p = ggplot('diamonds', aes('carat', y='price'))
      g = geom_point() + facet_wrap(None, "color")
      ggsave("test1.pdf", p+g, data=None)



# Past Jobs

* Google Internship in Webtables research project.  <small>Spring 2007 - Winter 2008</small></li>
* UC Berkeley Database Teaching Assistant.  <small>Fall 2006</small></li>
* Yahoo Internship in RDF Databases.  <small>Summer 2006.</small></li>
* Microsoft Internship in Exchange Server. <small>Summer 2005.</small></li>
* IBM Extreme Blue. <small>Spring 2005.</small></li>


<link href='https://fonts.googleapis.com/css?family=Source+Code+Pro:300' rel='stylesheet' type='text/css'>


