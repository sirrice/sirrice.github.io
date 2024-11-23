var matrixify = (function() {
  function truncatefloat(n) {
    return Math.round(n * 150) / 150;
  }

  function measureCharWidths() {
    var w2c = {};
    var c2w = {};
    var htmls = [];
    for (var i = 0; i < chars.length; i++) {
      var c = chars[i];
      htmls.push(`<span id='char-${i}'>${c}</span>`)
    }
    document.getElementById("chars").innerHTML += htmls.join("");
    setTimeout(function() { 
      for (var i = 0; i < chars.length; i++) {
        c = chars[i];
        var w = $(`#char-${i}`)[0].getBoundingClientRect().width;
        var wint = truncatefloat(w);
        (w2c[wint] ||= []).push(c)
        c2w[c] = wint;
      }
      mappings = {w2c: w2c, c2w: c2w};
    }, 500);
  }

  var getTextNodes = function(tagName) {
    var el = document.getElementsByTagName(tagName)[0];
    var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
      while(n=walk.nextNode()) a.push(n);
        return a;
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var nums  = "1234567890";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols = ".,'/\\!@#$%^&*()[{]}-_=+?|`~\""
  var chars = nums + lower + upper + symbols;

  var randChars = function(baseStr) {
    var s = Array.apply(null, Array(baseStr.length));
    for (var i = 0; i < baseStr.length; i++) {
      s[i] = baseStr[i];
      var w = mappings.c2w[baseStr[i]];
      if (w === undefined) {
        // do nothing
      } else if (!/\s/.test(baseStr[i])) {
        var cands = mappings.w2c[truncatefloat(w)];
        s[i] = cands[getRandomInt(cands.length)];
      }
    };
    return s.join("");
  }


  var mappings = {"w2c":{"4":["i","j","l","I"],"5":["f"],"6":["r","t"],"7":["1"],"8":["k","s","v","x","y","z","J"],"9":["2","7","a","c","e","g","h","n","o","p","q","u","E","F","L"],"10":["3","4","5","6","8","9","0","b","d","A","B","K","P","R","S","T","V","Y","Z"],"11":["C","D","U","X"],"12":["w","G","H","N","O","Q"],"14":["m","M"],"15":["W"]},"c2w":{"0":10,"1":7,"2":9,"3":10,"4":10,"5":10,"6":10,"7":9,"8":10,"9":10,"a":9,"b":10,"c":9,"d":10,"e":9,"f":5,"g":9,"h":9,"i":4,"j":4,"k":8,"l":4,"m":14,"n":9,"o":9,"p":9,"q":9,"r":6,"s":8,"t":6,"u":9,"v":8,"w":12,"x":8,"y":8,"z":8,"A":10,"B":10,"C":11,"D":11,"E":9,"F":9,"G":12,"H":12,"I":4,"J":8,"K":10,"L":9,"M":14,"N":12,"O":12,"P":10,"Q":12,"R":10,"S":10,"T":10,"U":11,"V":10,"W":15,"X":11,"Y":10,"Z":10}}

  var run = function() {
    var nodes = getTextNodes("body");
    nodes.forEach(function(n) {
      const p = n.parentNode;
      const tag = p.tagName.toLowerCase();
      if (tag == 'style' || tag == 'script') return;
      if (n.origContent === undefined) {
        n.origContent = n.textContent;
      }
      n.textContent = randChars(n.textContent);
    });
  }

  var revert = function() {
    var nodes = getTextNodes("body");
    nodes.forEach(function(n) {
      n.textContent = n.origContent;
    });
  }



  var wait = .1;
  var rate = 1.01;
  var start = null;
  function doit() {
    start = start || Date.now();
    if (wait < 400 && (Date.now() - start) < 1400) {
      wait *= rate;
      rate *= 1.07;
      run();
      setTimeout(doit, wait);
    } else {
      revert();
      start = null;
      wait = 1;
      rate = 1.01;
   }
  }

  var keeprunning = true;
  doit.start = function() {
    keeprunning = true;
    runit()
  }
  doit.end = function () {
    keeprunning = false;
    revert()
  }

  function runit() {
    if (!keeprunning) return;
    run()
    setTimeout(runit, 100)
  }
  
  doit.reset = function() {
    wait = 1;
    rate = 1.01;
    start = null;
  }
  doit.reset = revert;
  doit.measureCharWidths = measureCharWidths;
  doit.chars = chars;

  measureCharWidths();
  return doit;
})()



//
//if (!/visited=true/.test(document.cookie)) {
//  matrixify();
//}
