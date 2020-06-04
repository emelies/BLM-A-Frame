window.onload = init;

function init() {
  // get all <video>
  let videos = document.querySelectorAll("video");

  // get all <a-box>
  let boxes = document.querySelectorAll("a-box");

  // loop through all the boxes
  boxes.forEach(box => {
    
    // if a box is clicked
    box.onclick = function() {
      
      // get the id
      let id = box.getAttribute("src");
      
      // get the clicked video
      let video = document.querySelector(id);

      // pause all videos
      videos.forEach(vid => {
        
        // if the video is not the clicked video, pause it!
        if (vid !== video) {
          vid.pause();
        }
      });

      // get the correct video and play it!
      if (video.paused){
        video.muted = false;
        video.play();
      } else {
        video.pause();
      }
    };
  });

  document.querySelectorAll("video").forEach(video => {
    video.setAttribute("preload", true);
    video.setAttribute("autoplay", true);
    video.playsinline = true;
    video.muted = true;
    video.setAttribute("crossorigin", "anonymous");
    video.play();
    video.pause();
  });
}
