const video = document.getElementById('video');
const playPause = document.getElementById('playpause');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// MDN link
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs


// Play & pause video
function toggleVideoStatus() {
  console.log('toggleVideoStatus()');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// **********************************************
// update play/pause icon
function updatePlayIcon() {
  console.log('updatePlayIcon()');
  if (video.paused) {
    playPause.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    playPause.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// ***********************************************
// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  console.log('updateProgress()', progress.value);

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // ******************************************
  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}

//************************************** */
// Set video time to progress
function setVideoProgress() {
  console.log('setVideoProgress()');
  video.currentTime = (+progress.value * video.duration) / 100;
}

//***************************************** */
// Stop video
function stopVideo() {
  console.log('stopVideo()');
  //  nema stop funkcije, ova kombinacija se koristi
  video.currentTime = 0;
  video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
playPause.addEventListener('click', toggleVideoStatus);


// ovo sa pokrece samo ovisno dali video svira ili je puziran
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);

video.addEventListener('timeupdate', updateProgress);

stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
