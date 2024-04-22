// JavaScript
window.onload = function () {
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";

  var video = document.createElement("video");
  video.src = "SubwaySurfing.mp4";
  video.autoplay = true;
  video.controls = true;

  overlay.appendChild(video);
  document.body.appendChild(overlay);

  video.onended = function () {
    document.body.removeChild(overlay);
  };
};
