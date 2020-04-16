function setColor(idx) {
  var color = "#" + colors[idx % colors.length];
  window.color = color;
  $("h4,a,.scrolldot").css({
    color: color,
    fill: color
  });
}
window.setColor = setColor;

var colors = ["1054B2", "f77950", "3187FF", "13ab26", "c66ae0", "FF3D3B", "e61431", "ff0000", "0faf8d"];
var hue = Math.floor(Math.random() * 200) + 100; // hue = 201;
var hue = Math.floor(Math.random() * 300);
var color = "hsla(" + hue + ", 73%, 52%, 0.7)";
setColor(Math.floor(Math.random()*colors.length));

var goCray = false;
var bold = false;
var h4s = null;
function randColor() {
  if (h4s == null) {
      h4s = $("h4,a");
  }

  if (goCray) {
    setColor(Math.floor(Math.random()*colors.length));
    if (bold) {
      h4s.css("text-decoration", "underline overline");
    } else {
      h4s.css("text-decoration", "none");
    }
    bold = !bold;
    setTimeout(randColor, Math.random() * 100 + 100);
  } else {
    h4s.css("text-decoration", "none");
  }
};

function toggleCray() {
  goCray = !goCray;
  $("#goCrayBtn").toggleClass("on", goCray);
  randColor();
}
