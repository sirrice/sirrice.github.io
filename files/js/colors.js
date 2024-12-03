function setColor(idx) {
  if (colorcssel == null)
    colorcssel = $("#colorcss")[0];
  var color = "#" + colors[idx % colors.length];
  console.log(color)
  var lighter = lightenHexColor(color, 96);
  let css = `
  h1,h2,h3,h5,.scrolldot {
    background: none;
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


  css += (goCray)
    ? `
    h4,a { 
      background: ${color}; 
      color: white; fill: white; } `
    : `
    h4,a { 
      background: none; 
      color: ${color}; 
      fill: ${color}; }`;
  css += `
  a:hover {
    background: ${color};
    color: white;
    fill: white;
  }`

  colorcssel.innerHTML = css;
  window.color = color;
}

let colorcssel = null;
window.setColor = setColor;

const colors = ["1054B2", "f77950", "3187FF", "13ab26", "c66ae0", "FF3D3B", "e61431", "ff0000", "0faf8d"];
var color;
setColor(Math.floor(Math.random()*colors.length));

var goCray = false;
var bold = false;
var craycssel = null;
function randColor() {
  craycssel ||= $("#craycss")[0];
  var idx = Math.floor(Math.random()*colors.length);
  setColor(idx);
  if (goCray)
    setTimeout(randColor, Math.random() * 100 + 100);
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

