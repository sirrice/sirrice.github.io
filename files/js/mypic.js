var picurls = [
  "/files/images/eugene.gif",
  "/files/images/wulab_small.png"
];

var picidx = Math.floor(Math.random() * picurls.length) % picurls.length;
var picurl = picurls[picidx];


((document) => {
  let idx = 0;
  let url = picurls[idx];
  const css = document.getElementById('style-mypic');
  const img = document.getElementById('mypic-container');

  function updatePic() {
    idx = (idx+1) % picurls.length;
    url = picurls[idx]
    console.log(idx)
    css.innerHTML = ` #mypic:hover { background-image: url(${url}) } `
    console.log(url)
  }

  $(img).on("mouseenter", function() {
    updatePic();
  });
})(document)

//var css = document.createElement('style');
//css.type = 'text/css';
//css.appendChild(document.createTextNode("#mypic:hover { background-image:url("+picurl+"); }"))
//document.querySelector("body").appendChild(css);
//console.log(picurl);


