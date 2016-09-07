

<p class="header" style="font-size: 30pt">
Cleaning for Data Science
</p>
<p class="header">
<small>Modern data science applications rely heavily on machine learning models.   We seek to understand and optimize data cleaning in this new setting.</small>
</p>



# ActiveClean <a name="activeclean"></a>

Databases can be corrupted with various errors such as missing, incorrect,
or inconsistent values. Increasingly, modern data analysis
pipelines involve Machine Learning, and the effects of dirty data
can be difficult to debug. Dirty data is often sparse, and naive sampling
solutions are not suited for high-dimensional models. 
The following figures show how data cleaning can _degrade_ the machine learning model.  


<div>
  <div class="subfig">
    <img src="./images/activeclean/fig1.png"></img>
    <p>
      Shows how systematic corruption of data (from circles to crosses) can lead to a shifted, incorrect model.  
    </p>
  </div>
  <div class="subfig">
    <img src="./images/activeclean/fig2.png"></img>
    <p>
      Illustrates the true model if the full dataset were cleaned.
    </p>
  </div>
  <div class="subfig">
    <img src="./images/activeclean/fig3.png"></img>
    <p>
      Shows how combining two cleaned records (blue) with the dirty records leads to a <i>worse</i> model than no cleaning.
    </p>
  </div>
  <div class="subfig">
    <img src="./images/activeclean/fig4.png"></img>
    <p>
      Shows how only using the two cleaned records can also result in a worse model due to sampling error.
    </p>
  </div>
  <div style="clear:both; height: 2px;"></div>
</div>




ActiveClean is an iterative cleaning framework that can *correctly* retrain the machine learning model 
when data is cleaned, and provides a set of optimizations to select the best data to be cleaned.
In this way, you only need to clean a small subset of the data in order to produce a model similar
to if the full dataset were cleaned.


# Code

The ActiveClean codebase is written in Python and includes the core ActiveClean algorithm, a data cleaning
benchmark, and (in the future), an dirty data detector:

The [Data Cleaning Benchmark](https://github.com/sjyk/datacleaning-benchmark) automatically injects data errors into your datasets to test the robustness
of your machine learning models to data errors.  It can be installed using **pip**:

          pip install cleaningbenchmark


The ActiveClean algorithm will be released at the end of the summer

The ActiveClean detection tool will be released in the fall.

Everything is MIT Licensed

# Publications

<div class="section" id="publications">

<div class="item">
  <div class="screenshot"><img src="./images/previews/preview_activeclean-vldb16.png" width=200/></div>
  <div class="text">
    <div class="title">
      <a href="./files/papers/activeclean-vldb16.pdf">
        ActiveClean: Interactive Data Cleaning For Statistical Modeling
      </a>
    </div>
    <div class="authors">Sanjay Krishnan, Jiannan Wang, Eugene Wu, Michael J. Franklin, Ken Goldberg</div>
    <div class="links">
      <span class="conf">VLDB 2016</span>
    </div>
  </div>
  <div style="clear: both"></div>
</div>

<div class="item">
  <div class="screenshot"><img src="./images/previews/preview_activeclean-sigmod16demo.png" width=200/></div>
  <div class="text">
    <div class="title">
      <a href="./files/papers/activeclean-sigmod16demo.pdf">
        ActiveClean: An Interactive Data Cleaning 
        Framework For Modern Machine Learning (Demo)
      </a>
    </div>
    <div class="authors">Sanjay Krishnan, Michael J. Franklin, Ken Goldberg, Jiannan Wang, Eugene Wu</div>
    <div class="links">
      <span class="conf">SIGMOD 2016</span>
      <span><a class="button" href="http://automation.berkeley.edu/activecleandemo">See the award-winning Demo</a>
      </span>
    </div>
  </div>
  <div style="clear: both"></div>
</div>

<div class="item">
  <div class="screenshot"><img src="./images/previews/preview_cleaning-hilda16.png" width=200/></div>
  <div class="text">
    <div class="title">
      <a href="./files/papers/cleaning-hilda16.pdf">
        Towards Reliable Interactive Data Cleaning: A User Survey and Recommendations
      </a>
    </div>
    <div class="authors">Sanjay Krishnan, Daniel Haas, Michael J. Franklin, Eugene Wu</div>
    <div class="links">
      <span class="conf">HILDA 2016</span>
    </div>
  </div>
  <div style="clear: both"></div>
</div>




</div><!-- /publications -->


# News

* [A Data-Cleaning Tool for Building Better Prediction Models](http://datascience.columbia.edu/data-cleaning-tool-building-better-prediction-models)

# Contact

Please contact [Sanjay Krishnan](https://www.ocf.berkeley.edu/~sanjayk/) or [Eugene Wu](https://www.eugenewu.net) with any questions.  We'd love to learn about your data cleaning pipeline and technical issues related to data cleaning for machine learning!

# Collaborators

ActiveClean is a collaboration between the [WuLab](http://eugenewu.net/lab.html) at Columbia University, the [AMPLab](https://amplab.cs.berkeley.edu) at University of California, Berkeley, and [Jiannan Wang](https://www.sfu.ca/computing/people/faculty/jiannanwang.html) at Simon Fraser University.

<a href="http://eugenewu.net"><img src="./images/cudbg.png" height=46.3 id=""/></a>
<a href="http://amplab.cs.berkeley.edu"><img src="https://amplab.cs.berkeley.edu/wp-content/themes/amp/assets/images/amplab_logo.png" width=200></img></a>



<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-3762902-2");
pageTracker._initData();
pageTracker._trackPageview();
</script>







