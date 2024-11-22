function setColor(idx) {
  if (colorcssel == null)
    colorcssel = $("#colorcss")[0];
  var color = "#" + colors[idx % colors.length];
  var lighter = lightenHexColor(color, 96);
  let css = `
  h1,h2,h3,h4,h5,a,.scrolldot {
    color: ${color};
    fill: ${color};
  }
  .bordered {
    border: 2px solid ${color};
    background-color: ${lighter};
  }
  .tagbtn {
    color: ${color};
    border: 1px solid ${color};
  }
  .tagbtn-selected {
    color: white;
    background-color: ${color};
  }
  #goCrayBtn.slider {
    background-color: ${color};
  }

  #goCrayBtn input:checked + .slider {
    background-color: ${color};
  }

  .tagbtn:hover {
    background-color: ${lightenHexColor(color, 80)};
    color: ${color};
    border: 1px solid ${color};
  }

  `;

  colorcssel.innerHTML = css;
  window.color = color;
  //$("h1,h2,h3,h4,h5,a,.scrolldot").css({
  //  color: color,
  //  fill: color
  //});
  //$(".bordered").css({
  //  border: `2px solid ${color}`,
  //  'background-color': lightenHexColor(color, 97)
  //});


}
let colorcssel = null;
window.setColor = setColor;

const colors = ["1054B2", "f77950", "3187FF", "13ab26", "c66ae0", "FF3D3B", "e61431", "ff0000", "0faf8d"];
var hue = Math.floor(Math.random() * 200) + 100; // hue = 201;
var hue = Math.floor(Math.random() * 300);
//var color = "hsla(" + hue + ", 73%, 52%, 0.7)";
var color;
setColor(Math.floor(Math.random()*colors.length));

var goCray = false;
var bold = false;
var h4s = null;
function randColor() {
  if (h4s == null) {
      h4s = $("h4,a");
  }
  let css = ``

  if (goCray) {
    var idx = Math.floor(Math.random()*colors.length);
    //var _color = '#' + colors[idx % colors.length];
    setColor(idx);
    if (1 || bold) {
      //h4s.css("text-decoration", "underline overline");
      h4s.css({
        background: color,
        color: 'white',
        fill: 'white'
      });
    } else {
      //h4s.css("text-decoration", "none");
      h4s.css({
        background: 'none',
        color: color,
        fill: color
      });
    }
    bold = !bold;
    setTimeout(randColor, Math.random() * 100 + 100);
  } else {
    //h4s.css("text-decoration", "none");
    h4s.css({
      background: 'none',
      color: color,
      fill: color
    });
  }
};

function toggleCray() {
  goCray = !goCray;
  console.log("togglecray", goCray)
  //$("#goCrayBtn").toggleClass("on", goCray);
  randColor();
}

$("#goCrayBtn input[type=checkbox]").change(function() {
  toggleCray();
  if($(this).is(':checked')) {
    matrixify.start()
  } else {
    matrixify.end()
  }
})


function lightenHexColor(hex, percent) {
    // Remove the # if it exists
    hex = hex.replace(/^#/, '');

    // Parse the hex color into RGB components
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Increase each component by the given percentage
    r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
    g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
    b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

    // Convert back to a hex string
    const newHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    return newHex;
}

