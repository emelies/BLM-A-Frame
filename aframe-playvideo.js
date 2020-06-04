document.querySelectorAll("a-box").forEach(sphere => {
  sphere.onclick = function() {
    let id = sphere.getAttribute("src");
    let video = document.querySelector(id);
    let src = video.src;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
});
