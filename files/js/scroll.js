document.onscroll = (function() {
  var prevy = 0,
      prevt = Date.now();
  var buffer = [];
  var threshold = 50;
  var maxwidth = 15;
  function onscroll() {
    var now = Date.now();
    var y = window.scrollY;
    if (buffer.length == 0 || now - prevt > threshold) {
      buffer.push({ ys: y, yp: y, dy: 0, ts: now, te: now })
    }
    var cur = buffer[buffer.length-1];
    cur.dy += Math.abs(cur.yp - y);
    cur.yp = y; 
    cur.te = prevt = now;
    if (shouldrender())
      renderscroll();
  };

  var prevrendertime = null;
  function shouldrender() {
    if (prevrendertime == null) return true;
    var t = Date.now();
    var pt = prevrendertime;
    prevrendertime = t;
    return (t - pt > threshold) ;
  };

  function renderscroll() {
    var maxh = document.documentElement.clientHeight;
    svg.selectAll("*").remove();
    var g = svg.append("g");
    g.selectAll("rect")
      .data(buffer).enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", function(d, i) { return i*3; })
      .attr("height", 2)
      .attr("x", function(d) { return Math.min(maxwidth, maxwidth * d.dy / maxh);})
      .attr("width", 2)
      .style("fill", window.color);
  };

  // setup master div
  var svg = d3.select("body").append("svg");
  svg.style("position", "fixed")
     .style("top", "1em")
     .style("left", "0px")
     .style("height", "100%")
     .style("width", "20px");
  return onscroll;
})();
