window.onload = init;

function init() {
  document.querySelectorAll("a-box").forEach(box => {
    box.onclick = function() {
      let id = box.getAttribute("src");
      let video = document.querySelector(id);
      let src = video.src;
    };
  });
}

document.querySelectorAll("video").forEach(video => {
  video.setAttribute("preload", true);
  video.setAttribute("autoplay", true);
  video.playsinline = true;
  video.muted = false;
  video.setAttribute("crossorigin", "anonymous");
  video.play();
  video.pause();
});
