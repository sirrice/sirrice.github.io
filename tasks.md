---
layout: page
---



# Research Projects


The following are example projects for prospective **undergraduate and masters** students.
Concrete projects are well-defined and a good place to start, while open-ended projects are good candidates for research theses.   Alternatively, prospective students are welcome to read some recent papers from the lab and suggest extensions or applications as projects as well.  


Open-ended projects are trickier and meant as research projects. Research projects demand the ability to look for answers to your questions.  So, before condacting the professor, read the papers and formulate a high level plan for how to tackle the problem.


If interested, contact the professor with a description of the project you are interested in, your understanding of the papers/relevant material, and your availability -- hours per week, and intended semester(s) of commitment.

<!--finish robert's sql stepper/debugger demo-->

## SQL Tutor

[SQL Tutor is a web application](https://cudbg.github.io/sqltutor/) that visualizes how a SQL query is executed step by step in the query plan.   Under the covers it uses data provenance to draw the row-level dependencies in each query operator step.   It currently only works for two canned queries, and we would like it to work for a broader range of SQL queries.

### Concrete Projects

* Extend the [Python databass engine](https://github.com/cudbg/databass) to emit the appropriate provenance and intermediate results so the query plan can be visualized in SQL Tutor
* Make everything run in the browser using [pyodide](https://pyodide.org/en/stable/)
* Help make SQL Tutor more user friendly

Databass is a slow engine used for educational purposes.   PhD students in the lab have been extending the [Duckdb](https://duckdb.org/) query engine to track lineage.  An advanced project is to work with the PhD students in the lab to extend their system to support SQL Tutor.

**Before contacting the professor**, look at the demo, the databass engine, and be able to explain how the query complier works.


## Automatic Interface Generation

Precision Interfaces is a project to automatically generate interactive visualization
interfaces from SQL queries and natural language.

* [Main SIGMOD paper (very dense)](https://www.dropbox.com/s/bfs2qclp9slwfvi/pi-sigmod22-camera.pdf?dl=0)
* [NL2Vis workshop paper](https://www.dropbox.com/s/l0hjm0mbv6h1ff0/pinl-nlvisworkshop22-submitted.pdf?dl=0)  
* [Jupyter Notebook Integration Demo](https://www.dropbox.com/s/s1p1byz7tlquj5v/pi2-sigmod22demo-camera.pdf?dl=0)

### Concrete Projects

* We recently redesigned the (front-end interface framework)[https://github.com/cudbg/pi-svelte].    Help us port the backend interface generation system to generate specifications for the new front-end framework
* Help implement vis and interaction components for our front-end framework in Typescript+Svelte.
* Extend the system to generate interfaces from [dbt projects](https://getdbt.com) as input.  The user optionally chooses dbt models they are interested in, and system synthesizes interactive interface for them.

**Before contacting the professor**, you should have experience with Svelte.  Look at the [front-end interface framework](https://github.com/cudbg/pi-svelte), and be able to explain the spec and how the backend, views, and widgets communicate with each other.



### Open ended projects

* Extend interface generation to support interactions designed for accessibility (e.g., interactions for vision impaired users or for speech only modalities).




## Efficient Provenance Tracking 

Our group works on efficient systems for provenance tracking in high performance data analysis engines.  We are developing program analysis techniques to recommend how to instrument a piece of data analytics code in order to efficiently caption nad query its data provenance.  

We are in the middle of writing up the techniques.  In the mean time, you should read the precursor to the work to learn about data provenance and instrumentation and then talk to professor wu.   

* [Smoke paper](https://arxiv.org/abs/1801.07237)
* [Provenance in Interactive Vis](https://arxiv.org/abs/1801.07237)


**Before contacting the professor**, you should read the papers, have experience reading and modifying system software (e.g., networking, databases, OS, etc), and have working knoledge of C++ or Rust.

### Open ended projects

* Help us implement and harden the program analysis techniques
* Apply the program analysis techniques to another vectorized columnar data system, like [DataFusion](https://docs.rs/datafusion/latest/datafusion/), [Monetdb](https://en.wikipedia.org/wiki/MonetDB), .
* Explore the trade-off and synergies between [logical query rewrites](https://ieeexplore.ieee.org/abstract/document/4812401/) for provenance and physical instrumentation in streaming dataflow systems like [differential dataflow](https://timelydataflow.github.io/differential-dataflow/)/[materialized](https://materialized.io).   You can get pretty far by simply performing logical rewrites of the dataflow operators without modifying the implementation of the dataflow system.

## Super Fast Query Explanations

Query explanations generate predicates over an input table that explain why the results of a query look wrong.   Generating these explanations are very useful ([there's a billion dollar company trying to do this](https://sisudata.com/blog/bringing-decision-intelligence-to-google-cloud)) but super slow.  

We have ongoing work that uses provenance, parallelization, and vectorization to brute-force evaluate millions of explanations a second.  Help us build this library out and release an open source package that anyone can use. 

* [Scorpion Paper](http://sirrice.github.io/files/papers/scorpion-vldb13.pdf)

**Before contacting the professor**, you should read the paper, and have some systems background (e.g., OS or computer architecture class) and motivation to learn C++, GPU acceleration, parallelization.



## VCA: View Composition Algebra

View Composition Algebra is a new type of visualization interaction that allows users to drag and compare data in charts easily.   We have developed a library for composing SQL queries and visualizations.


* [TVCG Paper](https://arxiv.org/pdf/2202.07836.pdf)
* [Website/demo](https://viewcompositionalgebra.github.io)

### Concrete projects

Integrate VCA into the [Rilldata visualization system](https://github.com/rilldata/rill-developer).   

* The goal is to be able to compare any piece of data visualized in any chart in Rilldata, with any other.   
* Students should be comfortable hacking on Rilldata, which is in Svelte, and manipulating SQL queries.  


Improve the library 

* Help refactor the VCA library, and convert to typescript
* Transition from our custom knex.js based query library to something more widely used ([Ibis](https://ibis-project.org/docs/3.2.0/), [polysql](https://github.com/jeremiah-shaulov/polysql), etc)

Use transformers to translate natural language comparison statements into VCA statements, so users can compare visualized data using natural language.  NL -> VCA.  Compare things on the screen with NL, translate to selections/views and VCA operations

**Before contacting the professor**, look through the VCA library code and be able to explain how a View is modeled and how  statistical composition works.

### Open ended projects

Extend the formalism and library to support

* hierarchical data 
* graph/network data
* scientific data
* general SQL queries/data transform graphs.  

Explore integrating [design guidelines](https://graphics.cs.wisc.edu/GleicherAssets/Talks/2017_10_VisComp-given.pdf)  into the formalism

Explore applying techniques from data integration (matching, type inference, etc) to improve comparison of complex data types or complex data flows


<!--
## Could This Be Bad?

This is an open ended research project, inspired by [https://twitter.com/planetscaledata/status/1551607869585235968](https://twitter.com/planetscaledata/status/1551607869585235968)


Can we develop a system that warns users if an action in the database may have bad ramifications in the future?   One way to think about it:

      P(bad things | actions in the past) =
      P(bad things | actions)P(actions | query log)

What we care about is most likely:

      P(bad things | actions)P(actions | query log) - P(bad things)

Where log shows likelihood of access/query operations.  It also could suggest what bad things are "probably OK"

We can categorize/model "bad things", and assess them based on whether
they make a set of "Tasks" "worse".

* Tasks ~= past queries/workload from some set of users

Worse could mean many things!

Not runnable:

* lost data
* changed schema
* changed semantics
* changed concurrecy/recoverability/etc levels
* changed access controls

Incorrect data:

* violate (past?) constraints
* "fairness" type stuff

Slower qs (handled by PDD and estimators, but maybe not exposed in a good way)

* queries slower
* users slower
* apps slower
* IPs slower

-->
