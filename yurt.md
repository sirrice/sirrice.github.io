---
layout: card2021
color: '#9E362C'
---

<!-- The video -->
<div class="container">
  <div class="row">
    <div class="col-md-6">
    <video autoplay loop id="myVideo" onclick="myFunction()">
      <source src="{{page.urlprefix}}./files/images/2021card/elliotvideo.mp4"  />
    </video>
    </div>
  <div  class="col-md-4 text">
  <h1>Happy 2021 Holidays!</h1>
  <p>Elliot is now a little boy that waddles around, smiles at strangers, and splashes in puddles.
  He loves finding animals in his books and pointing out other books that have the same animals.
  He's started daycare in September, and absolutely loves it.  
  The teachers told us that "<i>Elliot's friendly personality is conquering everybody's heart in the classroom.</i>"
  </p>
  <p>
  We're also thankful of Lydia and Eugene's parents for visiting us multiple times this years to
  help take care of Yurt (and us).
  </p>

  <p>
  Click the video to pause/play.
  Oh, and don't miss <a href="./yurt2020">his 2020 review of beds</a>!
  </p>
  </div>
  </div>
</div>

<!-- Optional: some overlay text to describe the video -->

<style>
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 50%;
  max-height: 100%;
}
#myVideo:hover {
  cursor: pointer;
  background: whitesmoke;
}

.text {
  position: fixed;
  top: 45%;
  left: 50%;

}
/* Add some content at the bottom of the video/page */
.content {
display: none;
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}
</style>



<script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
//var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
   // btn.innerHTML = "Pause";
  } else {
    video.pause();
    //btn.innerHTML = "Play";
  }
}
</script>
