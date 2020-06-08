---
layout: sigmodsrc
---

# SIGMOD 2020 Student Research Competition Posters

<div class="row">
{% for p in {{site.data.sigmodsrc20}} %}

  <div class="col-md-4">
    {% if p.grade == "Graduate" %}
    <a href="./files/sigmodsrc20/{{p.filename}}">
      <div class="card card bg-light mb-3">
      <h5 class="card-header" style="color:black">
          {{forloop.index}}. 
          {{p.name}}
      </h5>
   
      <div class="card-body">
        <p class="card-text" style="color: black">
        {{p.university}}<br/> Ph.D. Student
        </p>
      </div>
    </div>
    </a>
    {% else %}
    <a href="./files/sigmodsrc20/{{p.filename}}">
      <div class="card text-white bg-secondary mb-3 ">
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

