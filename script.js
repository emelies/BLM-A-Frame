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
  
      // pause all videos
      videos.forEach(video => {
        video.pause();
      })
      
      // get the correct video and play it!
      let video = document.querySelector(id);
      video.play();
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
