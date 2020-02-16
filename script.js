// get DOM elements
const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

// Play and Pause video
// play() and pause() methods are built into html5
function toggleVideoStatus() {
  if( video.paused ) {
    video.play();
  } else {
    video.pause();
  }
}

// Update the play/pause icons
function updatePlayIcon() {
  if( video.paused) {
    play.innerHTML = '<em class="fa fa-play fa-2x"></em>';
  } else {
    play.innerHTML = '<em class="fa fa-pause fa-2x"></em>';
  }
}

// Update the progress and timestampe
function updateProgress() {
  return true;
}

// Set video time to progress
function setVideoProgress() {
  return true;
}

// Stop the video
// currentTime of 0 sets it back to beginning and pause stops it
function stopeVideo() {
  video.currentTime = 0;
  video.pause();
}


// event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopeVideo);

progress.addEventListener('change', setVideoProgress);