

<p class="header" style="font-size: 30pt">
Cleaning for Data Science
</p>
<p class="header">
<small>Modern data science applications rely heavily on machine learning models.   We seek to understand and optimize data cleaning in this new setting.</small>
</p>


<!--
<p id="contacts">
  <a href="#activeclean">ActiveCLean</a>
  <a href="#benchmark">Data Cleaning Benchmark</a>
</p>
-->

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


## Install It

ActiveClean is a lightweight python framework can be installed using <b>pip</b>:

      pip install activeclean

[Check out the github page](https://github.com/) for code and usage instructions


# Data Cleaning Benchmark <a name="benchmark"></a>

TBA

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








<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-3762902-2");
pageTracker._initData();
pageTracker._trackPageview();
</script>







