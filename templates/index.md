

# whois

<div class="section">
<table class='row'><tr>

  <td class="thumb">
    <div title="hello world" id="mypic"></div>
  </td>
  <td>

  <p id="address">
    Eugene Wu<br/>
    Assistant Professor<br/>
    <span class="small">
      <!--OH: Weds 4-5PM<br/>-->
      <!--7LW1A CEPSR-->
      Co-Chair of <a href="http://datascienceinstitute.github.io">Center of New Media</a> in the Data Science Institute<br/>
      <a href="./images/map.png">421 Mudd in the DSI space, 500 W 120th St</a><br/>
      <a href="http://cudbg.github.io/">Database Group</a><br/>
      <a href="http://www.cs.columbia.edu/">Computer Science</a> and <a href="http://datascience.columbia.edu/">Data Science Institute</a><br/>
      <a href="http://www.columbia.edu">Columbia University in the City of New York</a>
    </span>
  </p>
  <p id="contacts">
    <a href="mailto:ewu@cs.columbia.edu">email</a>
    <a href="https://twitter.com/sirrice">@sirrice</a>
    <a href="http://github.com/sirrice">github</a>  
  </p>
  </td>
  </tr>
  <tr> <td colspan=2>

</div>

# Applying

<span style="font-weight: bold; color: rgb(201, 27, 77); width: 100%; padding-top: 10px; padding-bottom: 10px">
  We are currently hiring great graduate and post-doctoral researchers.  If you are interested, DO NOT EMAIL ME DIRECTLY.  Click on the following links first.
</span>
  

* [Prospective PhD and PostDocs](./applying.html)
* [Prospective Interns, UGrad, Masters Students](https://docs.google.com/forms/d/1-s1SwcpY0WBnRrzlrQfSrcxSCeOAymOHfU-sHroUXfU/viewform)

# Bio


Eugene Wu is broadly interested in technologies that help users play with
their data.  His goal is for users at all technical
levels to effectively and quickly make sense of their information.
He is interested in solutions that ultimately improve the interface between
users and data, and techniques borrows from fields such as data management, 
systems, crowd sourcing, visualization, and HCI.


<span style="color: #888;">
  Eugene Wu recieved his Ph.D. from  [CSAIL](http://www.csail.mit.edu)
  at [MIT](http://www.mit.edu),
  advised by the esteemed [Sam Madden](http://db.lcs.mit.edu/madden/) and 
  [Michael Stonebraker](https://en.wikipedia.org/wiki/Michael_Stonebraker),
  in the [database](http://db.csail.mit.edu/) group.
  He spent the first half of 2015 at <a href="http://www.cs.berkeley.edu">UC Berkeley's</a> <a href="https://amplab.cs.berkeley.edu">AMPLab</a>
  before starting at <a href="http://www.cs.columbia.edu">Columbia University</a> in Fall 2015.
  <a href="http://www.cs.columbia.edu/2015/wu-profile/">Formal</a> and
  <a href="http://partnews.brownbag.me/2012/02/29/better-know-a-classmate-eugene-wu/">less formal</a> (by
  <a href="http://partnews.brownbag.me/2012/02/29/interview-matt-stempeck-wants-to-change-the-world-with-tech/">@mstem</a>) biographies.
  An <a href="./obit.html">obituary</a>.


  He is supported by [NSF 1527765](http://www.nsf.gov/awardsearch/showAward?AWD_ID=1527765&HistoricalAwards=false).
</span>



# Recent News

* Our first [(Data+Media):Humans in the Loop](https://datascienceinstitute.github.io/) speaker series event is Sep 28, 7-9PM!  Everyone welcome.
* There is a nice article about ActiveClean on the DSI website: [A Data-Cleaning Tool for Building Better Prediction Models](http://datascience.columbia.edu/data-cleaning-tool-building-better-prediction-models)
* Our [NSF proposal](https://nsfdeclarativevis.github.io/NSFDeclarativeVis/) with [jmh](http://db.cs.berkeley.edu/jmh/) and [jheer](http://homes.cs.washington.edu/~jheer/) on bringing declarative database ideas to interactive visualizations was funded!  The [DVMS](./dvms.html) train continues to roll.
* Our ActiveClean full paper was acceped to [VLDB 2016](http://vldb2016.persistent.com/)!  Come see our presentation in Dehli, India.  Look forward to our code release later this summer!
* Our [ActiveClean](/files/papers/activeclean-sigmod16demo.pdf) submission won Best Demo at SIGMOD 2016!  Many thanks to our collaborators Sanjay, Jiannan, Mike, and Ken!
* [Talk](http://sirrice.github.io/files/talks/2016-05-mit-bigdata.pdf) about what provenance is and how it relates to our projects.  MIT BigData Workshop 2016
* Congrats to Niranjan, Arnab, Yifan, Daniel Haas, Sanjay, and Daniel Alabi for getting **four** papers accepted at SIGMOD's [Hilda](http://www.hilda.io) workshop!
* QueryFix explanation demo with Xiaolan and Alexandra accepted to SIGMOD 2016!
* CLAMShell paper with Daniel Haas for _drastically_ speeding up crowds accepted to VLDB 2016!


# Current Research Areas

## [Data Visualization Management Systems](./dvms.html)


A Data Visualization Management System (DVMS) integrates
visualizations and databases, by compiling a declarative visualization
language into an end-to-end relational operator pipeline that renders
the visualization and is amenable to database-style optimizations.
Thus the DVMS can be both <i>expressive</i> via the
visualization language, and <i>performant</i>
by leveraging traditional and visualization-specific
optimizations to scale interactive visualizations to massive
datasets.

<img class="screenshot" id="dvmslogo" src="./images/dvms.png" />

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




# <span id="pubtitle">Selected Publications</span> 

<div class="section">
  <div id="publications">
    <cloudstitch-handlebars user="sirrice" app="wu-publications"></cloudstitch-handlebars>
  </div>
  <div style="font-size: 9pt">
    Powered by <a href="http://www.cloudstitch.io/">cloudstitch</a>.  
    <a href="https://www.cloudstitch.com/academic/eugene-wu-publications">clonethis</a>
  </div>
</div>





# Teaching

* [Introduction to Databases](http://www.cs.columbia.edu/~coms4111/) Fall 2016
* [Big Data Systems](http://columbia.github.io/systems-bigdata-class/) Spring 2016
* [Introduction to Databases](http://www.cs.columbia.edu/~coms4111/) Fall 2015
* [From Ascii to Answers](http://db.csail.mit.edu/6.885/) at MIT 
* [Data IAP](dataiap.github.io) at MIT



# Service

* 2017 [ICDE](http://icde2017.sdsc.edu/) Area Chair
* 2017 [WWW](http://sigmod2017.org/) PC
* 2017 [SIGMOD](http://sigmod2017.org/) Demo PC
* 2017 [SIGMOD](http://sigmod2017.org/) PC
* 2017 [VLDB](http://www.vldb.org/2017/) PC
* 2016 [InfoVis](http://ieeevis.org/) Reviewer
* 2016 [HILDA](http://hilda.io/2016/) PC
* 2016 [NEDBDay](http://mitdbg.github.io/nedbday/2016) Co-Chair
* 2016 [SIGMOD](http://sigmod2016.org/) travel award committee
* 2015 [SIGMOD](http://sigmod2015.org/) travel award committee
* 2014 [DATA4U](https://sites.google.com/site/data4u2014/) PC






# Some Interesting Links

* [Some vis inspiration](./d3gallery.html)
* [Tufte](http://www.edwardtufte.com)
* [I made tea](http://www.telescopictext.com/)
* [layer ping pong](http://eugenewu.net/layerpp.html)
* [pornp](http://www.pantsornopants.com)
* [Be](http://en.wikipedia.org/wiki/Adventure_Time)[st](https://en.m.wikipedia.org/wiki/Archer_(TV_series))
  [shows](http://www.adultswim.com/videos/rick-and-morty/pilot/)
  [ever?](http://en.wikipedia.org/wiki/Teen_Titans_(TV_series))
* [ar](http://juliakuo.com/my-work/concert-posters/)[ti](http://helllllen.org/)[st](http://magicalgametime.com)
  [he](http://www.tomgauld.com/)[ro](http://www.danmccarthy.org/)[s](http://sunbakerey.tumblr.com/)




