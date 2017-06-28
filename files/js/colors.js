function addStyle(str) {
  var sheet = document.createElement('style')
  sheet.innerHTML = str; 
  document.body.appendChild(sheet);
  return sheet;
};
function setColor(idx) {
  var color = "#" + colors[idx % colors.length];
  window.color = color;
  addStyle("h4,a { color: " + color + " };");
}
window.setColor = setColor;

var colors = ["1054B2", "f77950", "3187FF", "1bb92f", "c66ae0", "FF3D3B", "e61431", "ff0000", "0faf8d"];
var hue = Math.floor(Math.random() * 200) + 100; // hue = 201;
var hue = Math.floor(Math.random() * 300);
var color = "hsla(" + hue + ", 73%, 52%, 0.7)";
setColor(Math.floor(Math.random()*colors.length))



