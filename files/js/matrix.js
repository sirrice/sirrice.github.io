var matrixify = (function() {
  function measureCharWidths() {
    var w2c = {};
    var c2w = {};
    for (var i = 0; i < chars.length; i++) {
      var c = chars[i];
      document.getElementById("chars").innerHTML += "<span id='"+c+"'>" + c + "</span>";
      setTimeout(function() { 
        var w = $("#"+c).width();
        w2c[w] = w2c[w] || [];
        w2c[w].push(c);
        c2w[c] = w;
      }, 150);
    };
    setTimeout(function(){
      console.log(JSON.stringify({w2c: w2c, c2w: c2w}));
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
  var chars = nums + lower + upper;

  var randChar = function() {
    return chars[getRandomInt(chars.length)];
  }
  var randChars = function(baseStr) {
    var s = Array.apply(null, Array(baseStr.length));
    for (var i = 0; i < baseStr.length; i++) {
      s[i] = baseStr[i];
      var w = mappings.c2w[baseStr[i]];
      if (w === undefined) {
        // do nothing
      } else if (!/\s/.test(baseStr[i])) {
        var cands = mappings.w2c[w];
        s[i] = cands[getRandomInt(cands.length)];
      }
    };
    return s.join("");
  }


  var mappings = {"w2c":{"3":["i"],"4":["f","j","l","I","J"],"5":["t"],"6":["c","r","s","z"],"7":["k","v","x","y","F","L"],"8":["1","2","3","4","5","6","7","8","9","0","a","e","g","n","p","E","K","R","S","T","V","X","Y","Z"],"9":["b","d","h","o","q","u","A","B","C","P"],"10":["D","H","O","U"],"11":["w","G","N","Q"],"13":["m","M","W"]},"c2w":{"0":8,"1":8,"2":8,"3":8,"4":8,"5":8,"6":8,"7":8,"8":8,"9":8,"a":8,"b":9,"c":6,"d":9,"e":8,"f":4,"g":8,"h":9,"i":3,"j":4,"k":7,"l":4,"m":13,"n":8,"o":9,"p":8,"q":9,"r":6,"s":6,"t":5,"u":9,"v":7,"w":11,"x":7,"y":7,"z":6,"A":9,"B":9,"C":9,"D":10,"E":8,"F":7,"G":11,"H":10,"I":4,"J":4,"K":8,"L":7,"M":13,"N":11,"O":10,"P":9,"Q":11,"R":8,"S":8,"T":8,"U":10,"V":8,"W":13,"X":8,"Y":8,"Z":8}};

  var run = function() {
    var nodes = getTextNodes("body");
    nodes.forEach(function(n) {
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
       document.cookie = "visited=true;max-age=315360000";
       revert();
     }
  }
  
  doit.reset = function() {
    wait = 1;
    rate = 1.01;
    start = null;
  }
  doit.reset = revert;
  doit.measureCharWidths = measureCharWidths;

  return doit;
})()



if (!/visited=true/.test(document.cookie)) {
  matrixify();
}

