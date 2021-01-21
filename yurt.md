---
layout: card
logo: Yurt's 2020 Review of Beds
color: '#9E362C'
---


<div id="errmsg" style="margin-top: 5ex; text-align: center; font-size: 25pt; color: red; display: none;">
    <img src="./files/images/2020card/v-01.jpg" style="width:200px"/>
    <div style="margin-top:2em; width: 60%; margin-left: auto; margin-right: auto;">The screen size is too small.  Can you make the browser window wider?</div>
</div>
<div id="container">
  <div style="text-align: center; margin-top: 2em;">
    <img src="./files/images/2020card/hi.png" style="width:500px;">
  </div>
  <div style="margin-top: 5ex; text-align: center;">
    <span id="prev" style="text-align: center;">Prev</span>
    <span id="next" style="text-align: center; margin-left: 3em;">Next</span>
  </div>
  <div class='grid'>

    <div class="imgs">
        <img id="overlay" class="sleep-3" src="./files/images/2020card/sleep-3.png" alt="">
        <!--<img id="yurt" class="yurt square" src="./files/images/2020card/01.jpg" alt="">-->
        <div id="yurt" class="yurt square" alt=""></div>
    </div>
    <div class="review">
      <h3 id="name"></h3>
      <div id="stars" class="stars stars-{{img.stars}}"> </div>
      <div id="quote" class="quote">
        {{img.review}}
      </div>
    </div>
    
  </div>


</div>

<div id="preload" style="position: absolute; left: -1000px; top: -1000px">
</div>

<script>
var data = [
{% for img in site.data.card2020 %}
  {
    src: "{{img.src}}",
    overlay: {{img.overlay | default: "null"}},
    name: "{{img.name | default: ""}}",
    stars: {{img.stars }},
    review: "{{img.review}}"
  },
{% endfor %}
]

var App = ((data) => {
  var me = () => {};
  me.idx = 0;
  me.overlayidx = Math.floor(Math.random() * 5) + 1;
  me.prefix = "./files/images/2020card"
  me.overlay = $("#overlay")
  me.yurt = $("#yurt")
  me.title = $("#name")
  me.stars = $("#stars")
  me.quote = $("#quote")

  me.step = (n) => {
    me.idx += n;
    while (me.idx < 0) me.idx += data.length;
    me.idx = me.idx % data.length;
    return me.render();
  }

  me.render = () => {
    var img = data[me.idx];

    me.overlay.attr("class", "");
    me.overlay.attr("src", "");
    me.overlayidx = (me.overlayidx + 1) % 5 + 1; 
    me.overlay.attr("class", `overlay sleep-${me.overlayidx}`);
    me.overlay.attr("src", `${me.prefix}/sleep-${me.overlayidx}.png`);

    //me.yurt.attr("src", `${me.prefix}/${img.src}`);
    me.yurt.css("background", `center / contain no-repeat url(${me.prefix}/${img.src})`);
    me.title.text(img.name);
    me.stars.attr("class", `stars stars-${img.stars}`);
    me.quote.text(img.review);
    return me;
  }

  return me;
})(data)

$("#prev").on('click', () => { App.step(-1); })
$("#next").on('click', () => { App.step(1); })
App.render()

$(document).keydown(function(e) {
    switch (e.which) {
      case 39:
        App.step(1);
        break;
      case 37:
        App.step(-1);
        break;
    }
});


// preload
{% for img in site.data.card2020 %}
  $("#preload").append($(`<img src="./files/images/2020card/{{img.src}}"></img>`))
{% endfor %}
$("#preload").append($(`<img src="./files/images/2020card/sleep-1.png"></img>`))
$("#preload").append($(`<img src="./files/images/2020card/sleep-2.png"></img>`))
$("#preload").append($(`<img src="./files/images/2020card/sleep-3.png"></img>`))
$("#preload").append($(`<img src="./files/images/2020card/sleep-4.png"></img>`))
$("#preload").append($(`<img src="./files/images/2020card/sleep-5.png"></img>`))

var checkWindowSize = () => {
  console.log($(window).width())
  if ($(window).width() < 700) {
    $("#container").hide();
    $("#errmsg").show();
  } else {
    $("#container").show();
    $("#errmsg").hide();
  }
}

$(document).ready(() => {
  checkWindowSize();
  $(window).resize(checkWindowSize);
  
})

</script>





<style>
body {
box-shadow: #333 0px 0px 20px;
}

#preload {
  display: none;
}
#prev, #next {
  font-size: 20pt;
  cursor: pointer;
  padding: 1em;
}
#prev {
  padding-left: 5em;
}
#next {
  padding-right: 5em;
}
#prev:hover, #next:hover {
  text-decoration: underline;
}

.square {
  /*width: 300px;*/
  height: 300px;
}
.review {
  padding-top: 2em;
  width: 40%;
  display: inline-block;
}
.quote {
  font-size: 18pt;
  color: black;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.stars {
  width: 250px;
  height: 30px;
  margin-left: -10px;
  background-image:url(./files/images/2020card/stars.png);
  background-size: 200px;
  background-repeat: no-repeat;
}
.stars-1 { background-position: -10px -18px; }
.stars-2 { background-position: -10px -65px; }
.stars-3 { background-position: -8px -116px; }
.stars-4 { background-position: -12px -162px; }
.stars-5 { background-position: -9px -214px; }


.grid {
  display: flex;
  flex-Direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 5em;
}

.imgs .overlay {
  width: 200px;
  display: inline-block;
  position: absolute;
  z-index: 10;
  margin: 0px;
}
.imgs  .sleep-3 {
  width: 150px;
  top: -37%;
  left: -4%;
  z-index: 10;
}
.imgs  .sleep-1 {
  width: 200px;
  bottom: -20%;
  right: -30%;
}
.imgs  .sleep-2 {
  width: 200px;
  bottom: -10%;
  left: -25%;
}
.imgs .sleep-4 {
  width: 100px;
  bottom: -10%;
  left: -18%;
}
.imgs  .sleep-5 {
  width: 110px;
  bottom: -10%;
  right: -20%;
}


.imgs .yurt {
  height: 250px;
  width: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  background-color: #ccc;
  position: relative;
  z-index: 1;
}
.imgs {
  margin-top: 100px;
  margin-top: 2em;
  position: relative;
}


</style>


