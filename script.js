// documentation for video/audio api:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

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
  progress.value = (video.currentTime / video.duration) * 100; // assign a value of the current percentage complete
  // the progress bar keeps moving because this event is constantly being called

  // since this function constantly runs, we also want to update the clock here
  // get minutes
  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) {
    mins = '0' + String(mins);
  }
  // get seconds
  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10) {
    secs = '0' + String(secs);
  }

  // change the time on the page
  timestamp.innerHTML = `${mins}:${secs}`;

  
  // console.log(video.currentTime); // keeps track of current time
  // console.log(video.duration); // keeps track of total time
}

// Set video time to progress
// set the current time of the video to be the same as the value progress multipled by video duration divided by 100
// the + in front of progress.value makes sure its a number
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
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