



<!--<p class="header"><img width=150 src="./images/dvms.png"/></p>-->

<p class="header" style="font-size: 30pt">
<!--Expressive, Fast and Maintainable Visualizations-->
Data Visualization <br/>Management Systems
</p>
<p class="header">
<small>
  A top to bottom rethinking of data-driven interactive visualization system and language design.
</small>
</p>




## Overview

Most visualizations today are produced by retrieving data from a
database and using a specialized visualization tool to render it.
This decoupled approach results in significant duplication of
functionality, such as aggregation and filters, and misses tremendous
opportunities for cross-layer optimizations.  Furthermore, existing 
callback-based interactive visualization programming is difficult to write,
and impossible to manage and debug.

The Data Visualization Management System, or DVMS, is
based on a declarative visualization language that
fully compiles the end-to-end visualization pipeline into a set
of declarative, relational algebra-like queries. 
The DVMS logically manages the entire visualizations process, from data processing to
the pixels presented to the user, within a single data model.
This allows DVMS to be both expressive 
via the visualization language, performant by leveraging
traditional and visualization-specific optimizations to scale
interactive visualizations to massive datasets, and maintainable by
enabling more powerful analysis tools. 




# Mappings of Interactions
<a name="moi"></a>

<img width=400 src="./images/dvms_mappings.png"/>

Mappings of Interactions is a declarative approach to interaction specification
realized through a language called DDI. DDI is intended
to radically simplify the specification of interactive visualizations,
enabling much more widespread use of interactive features. The
dynamics of interaction introduce unique technical challenges and
opportu- nities, including debugging and testing of asynchronous
interaction handlers, and design tradeoffs between scaling up data
and maintaining interface responsiveness. We hypothesize that the
Mappings of Interactions can make these classes of challenges much
more tractable, and that DDI can engage visualization designers in
widespread, creative development of new interactive visualizations.



# Perceptually Accurate Interactive  Visualizations
<a name="pfunk"></a>

An often overlooked element of the interactive data visualization
stack is the human in the loop. While computational and data
processing capabilities have increased over time, human limits have
remained constant. In this light, we describe extensions to
client-server database-driven visualization systems that are both
customized to interactive workloads, and support perceptual models
that approximate the human's ability to decode visually encoded
information. We recognize and accommodate human perceptual limitations
through the use of <i>perceptual functions, or PFunk</i>
as a way to minimize computation, network and rendering costs, and
support high frame-rate interactions. 


Based on these models, we
seek to answer a critical question: *how can these models inform approximation decisions that improve end-to-end visualization performance?*

[See project page!](http://perceptvis.github.io/)



 

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





