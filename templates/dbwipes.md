

<p class="header">
Visualize. Browse. Understand.
</p>
<p class="header">
<small>DBWipes and Scorpion help you quickly visualize your data, identify outliers, and understand where those outliers arise from in the underlying data set</small>
</p>



# DBWipes
<a name="dbwipes"></a>


<img width=400 src="./images/dbwipes.png"/>

DBWipes is a lightweight interactive visualization tool that lets
users run aggregation queries over a database and interactively
filter the dataset along different dimensions.  Users can execute
SQL GROUP-BY queries through a simple form interface, and render
the results as a scatterplot.  DBWipes renders a histogram of each
attribute that users use to select and filter subsets of the
attribute's values.  Using this tool, users can easily compare the
results of an aggregation query over different subsets of the data.

DBWipes currently connects to a PostgreSQL backend, which 
executes the queries that are issued by the interface.



## Get DBWipes
<a name="installdbwipes"></a>

DBWipes is a python web-application can be installed using <b>pip</b>:

      pip install dbwipes

[Check out the github page](https://github.com/sirrice/dbwipes) for code and usage instructions


# Scorpion
<a name="scorpion"></a>

<img width=400 src="./images/scorpion.png"/>

Consider a simple analytic query that computes a company's total
expenses by month, and shows that last month's expenses was
unexpectedly high.  The analyst will naturally want to understand
why -- perhaps the company has put more resources into a new customer
demographic, or a department is overspending.  

Currently, the analyst 
must manually split the input data along different dimensions (e.g.,
dept, customer age), and hope that re-running the query will cause
changes.  If there is more than one outlier, or many dimensions in
the dataset, this ad-hoc process quickly becomes untenable. 

Scorpion is a library that helps answer these "why" questions.
The user simply selects examples of outlier and normal results and Scorpion
will look for subsets of the input table that potentially explains
the outliers and finds a combination of attribute values (predicate) that describes that subset.
To find such predicates, we develop a score for how much <i>influence</i>
a predicate on the outliers, and design efficient algorithms 
to find predicates with lots of influence.
 
## Get Scorpion
<a name="installscorpion"></a>

Scorpion is a python library that can be installed using <b>pip</b>:

      pip install scorpion

After Scorpion is installed, DBWipes will be able to use the library to interactively
explain outliers in its visualization.

[Check out the github page](https://github.com/sirrice/scorpion) for code and usage instructions.  





# User Study
<a name="userstudy"></a>

We are currently running a user study of DBWipes and Scorpion.  The study is a
live DBWipes installation and includes a walk-through tutorial of the system, including
the Scorpion plugin.

If you would like to participate in the study and try DBWipes and Scorpion
on some data analysis tasks, please click the following button.  Please note that
we will log your interactions with the system to gather aggregated statistics.

<a href="http://scorpion.csail.mit.edu:8888/study" target="_new" style="color:white">
<p class="btn"> Participate in Study </p>
</a>



# Publications

<div class="section" id="publications">

<div class="item">
  <div class="screenshot"><img src="./images/ermac_paper.png" width=200/></div>
  <div class="text">
    <div class="title">
      <a href="./files/papers/ermac-vldb14.pdf">
        The Case for Data Visualization Management Systems
      </a>
    </div>
    <div class="authors">Eugene Wu, Leilani Battle, Sam Madden</div>
    <div class="links">
      <span class="conf">VLDB 2014</span>
    </div>
  </div>
  <div style="clear: both"></div>
</div>



<div class="item">
  <div class="screenshot"><img src="./images/scorpion_paper.png" width=200/></div>
  <div class="text">
    <div class="title">
      <a href="./files/papers/scorpion-vldb13.pdf">
        Scorpion: Explaining Away Outliers in Aggregate Queries
      </a>
    </div>
    <div class="authors">Eugene Wu, Sam Madden</div>
    <div class="links">
      <span class="conf">VLDB 2013</span>
      <a href="./files/talks/scorpion_vldb13.pdf">Talk</a>
    
    </div>
  </div>
  <div style="clear: both"></div>
</div>


</div><!-- /publications -->








<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-3762902-2");
pageTracker._initData();
pageTracker._trackPageview();
</script>







