var picurls = [
  "/files/images/eugene.gif",
  "/files/images/wulab_small.png"
];

var picidx = Math.floor(Math.random() * picurls.length) % picurls.length;
var picurl = picurls[picidx];

var css = document.createElement('style');
css.type = 'text/css';
css.appendChild(document.createTextNode("#mypic:hover { background-image:url("+picurl+"); }"))
document.querySelector("body").appendChild(css);
console.log(picurl);


if (0) {
  if (!/pic=true/.test(document.cookie)) {
    document.cookie = "pic=true;max-age=315360000";
  } else {
    document.cookie = "pic=false;max-age=315360000";
    var css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(document.createTextNode("#mypic:hover { background-image:url(/files/images/eugene.png); }"))
    document.querySelector("body").appendChild(css);
  }
}
