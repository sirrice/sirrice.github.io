
if (Math.random() > 0.5) {
  var css = document.createElement('style');
  css.type = 'text/css';
  css.appendChild(document.createTextNode("#mypic:hover { background-image:url(/files/images/eugene.png); }"))
  document.querySelector("body").appendChild(css);
}
