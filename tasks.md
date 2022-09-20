# Research Projects

The following are example projects for prospective undergraduate and masters students.
Concrete projects are well-defined and a good place to start, while open-ended projects are good candidates for research theses.

Prospective students should read the relevant papers before contacting Professor Wu.

<!--finish robert's sql stepper/debugger demo-->

## SQL Tutor

[SQL Tutor is a web application](https://cudbg.github.io/sqltutor/) that visualizes how a SQL query is executed step by step in the query plan.   Under the covers it uses data provenance to draw the row-level dependencies in each query operator step.   It currently only works for two canned queries, and we would like it to work for a broader range of SQL queries.

Concrete Project

* Extend the Python databass engine to emit the appropriate provenance and intermediate results so the query plan can be visualized in SQL Tutor
* Make everything run in the browser using [pyodide](https://pyodide.org/en/stable/)
* Help make SQL Tutor more user friendly

Advanced

* databass is a slow engine used for educational purposes.   PhD students in the lab have been extending the [Duckdb](https://duckdb.org/) query engine to track lineage.  Work with the PhD students in the lab to extend their system to support SQL Tutor.


## Automatic Interface Generation

Precision Interfaces is a project to automatically generate interactive visualization
interfaces from SQL queries and natural language.

* [Main SIGMOD paper (very dense)](https://www.dropbox.com/s/bfs2qclp9slwfvi/pi-sigmod22-camera.pdf?dl=0)
* [NL2Vis workshop paper](https://www.dropbox.com/s/l0hjm0mbv6h1ff0/pinl-nlvisworkshop22-submitted.pdf?dl=0)  
* [Jupyter Notebook Integration Demo](https://www.dropbox.com/s/s1p1byz7tlquj5v/pi2-sigmod22demo-camera.pdf?dl=0)

Concrete Projects

* We recently redesigned the front-end interface framework.    Help us port the backend interface generation system to generate specifications for the new front-end framework
* Help implement vis and interaction components for our front-end framework in Typescript+Svelte.

Open ended projects

* Extend interface generation to support interactions designed for accessibility (e.g., interactions for vision impaired users or for speech only modalities).
* 

## VCA: View Composition Algebra

View composition algebra is a new formalism to support comparison interactions in data visualization interfaces.

* [TVCG Paper](https://arxiv.org/pdf/2202.07836.pdf)
* [Website/demo](https://viewcompositionalgebra.github.io)

Concrete projects

* Help refactor the VCA library, and convert to typescript
* Transition from our custom knex.js based query library to something more used ([Ibis](https://ibis-project.org/docs/3.2.0/), [polysql](https://github.com/jeremiah-shaulov/polysql), etc)
* Integrate VCA into a existing visualization library or system (openset, vega-lite, LookerML, etc) 
* Use transformers to translate natural language comparison statements into VCA statements, so users can compare visualized data using natural language.  NL -> VCA.  Compare things on the screen with NL, translate to selections/views and VCA operations

Open ended projects

* Extend the formalism and library to support
  * hierarchical data 
  * graph/network data
  * scientific data
  * general SQL queries/data transform graphs.  
* Explore integrating [design guidelines](https://graphics.cs.wisc.edu/GleicherAssets/Talks/2017_10_VisComp-given.pdf)  into the formalism
* Explore applying techniques from data integration (matching, type inference, etc) to comparison



## Could This Be Bad?

This is an open ended research project.  Inspired by https://twitter.com/planetscaledata/status/1551607869585235968

Can we develop a system that warns users if an action in the database may have bad ramifications in the future?   One way to think about it:

    P(bad things | actions in the past) =
    P(bad things | actions)P(actions | query log)

What we care about is most likely:

    P(bad things | actions)P(actions | query log) - P(bad things)

* log shows likelihood of access/query operations
* also suggest what bad things are "probably OK"

We can categorize/model "bad things", and assess them based on whether
they make a set of "Tasks" "worse".

* Tasks ~= past queries/workload from some set of users

Worse could mean:

* Not runnable:
  * lost data
  * changed schema
  * changed semantics
  * changed concurrecy/recoverability/etc levels
  * changed access controls
* Incorrect data:
  * violate (past?) constraints
  * "fairness" type stuff
* Slower qs (handled by PDD and estimators, but maybe not exposed in a good way)
  * queries slower
  * users slower
  * apps slower
  * IPs slower


