if (!/pic=true/.test(document.cookie)) {
  document.cookie = "pic=true;max-age=315360000";
} else {
  document.cookie = "pic=false;max-age=315360000";
  var css = document.createElement('style');
  css.type = 'text/css';
  css.appendChild(document.createTextNode("#mypic:hover { background-image:url(/files/images/eugene.png); }"))
  document.querySelector("body").appendChild(css);
}

if (Math.random() > 0.5) {
}
