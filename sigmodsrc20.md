---
layout: sigmodsrc
---

# [SIGMOD 2020 Student Research Competition](https://sigmod2020.org/sigmod_student_research_competition.shtml) 


###  Session Order

{% assign v2 =  site.data.sigmodsrc20 | sorte: "masterorder" %}


<table class="table-striped table">
  <tr>
  <th>Session</th>
  <th>Order</th>
  <th>Student Name</th>
  </tr>

{% for r in v2 %}
<tr>
<td>{{r.session}}</td>
<td>{{r.order}}</td>
<td><a href="./files/sigmodsrc20/{{r.filename}}">{{r.name}}</a></td>
</tr>
{% endfor %}
</table>




### Full Poster List

<div class="row">
{% for p in site.data.sigmodsrc20 %}

  <div class="col-md-4">
    {% if p.grade == "Graduate" %}
    <a href="./files/sigmodsrc20/{{p.filename}}">
      <div class="card card bg-light mb-3">
      <img class="card-img-top" src="./files/sigmodsrc20/{{p.filename}}.png" alt="Screen of poster for {{p.name}}" style="object-fit: none;  object-position: 0 0; height: 200px; width: 100%;" />

      <h5 class="card-header" style="color:black">
          {{forloop.index}}. 
          {{p.name}}
      </h5>
   
      <div class="card-body">
        <p class="card-text" style="color: black">
        {{p.university}}<br/> Graduate Student
        </p>
      </div>
    </div>
    </a>
    {% else %}
    <a href="./files/sigmodsrc20/{{p.filename}}">
      <div class="card text-white bg-secondary mb-3 ">
        <img class="card-img-top" src="./files/sigmodsrc20/{{p.filename}}.png" alt="Screen of poster for {{p.name}}" style="object-fit: none; object-position: 0 0;  width: 100%; height: 200px; " />
        <h5 class="card-header" >
          {{forloop.index}}. 
          {{p.name}}
        </h5>
   
        <div class="card-body">
          <p class="card-text" style="">
          {{p.university}}<br/> Undergraduate Student
          </p>
        </div>
    </div>
    </a>
    {% endif %}
  </div>

{% endfor %}
</div>

<style>
.card:hover {
  -webkit-box-shadow: 4px 4px 15px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px 4px 15px -2px rgba(0,0,0,0.75);
  box-shadow: 4px 4px 15px -2px rgba(0,0,0,0.75);
}

h1 {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
</style>

