const video = document.querySelector(".viewer");
const playButton = document.querySelector(".toggle");
const rewindButton = document.querySelector(".rewind");
const forwardButton = document.querySelector(".forward");
const volumeControl = document.querySelector(".volume");
const speedControl = document.querySelector(".playbackSpeed");
const progressBar = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

// Toggle play/pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = "❚ ❚";
    } else {
        video.pause();
        playButton.textContent = "►";
    }
}

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Seek in video
function seek(e) {
    const seekTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = seekTime;
}

// Rewind and forward
function rewind() {
    video.currentTime -= 10;
}

function forward() {
    video.currentTime += 25;
}

// Volume and playback speed controls
function updateVolume() {
    video.volume = volumeControl.value;
}

function updateSpeed() {
    video.playbackRate = speedControl.value;
}

// Event listeners
playButton.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
progressBar.addEventListener("click", seek);
rewindButton.addEventListener("click", rewind);
forwardButton.addEventListener("click", forward);
volumeControl.addEventListener("input", updateVolume);
speedControl.addEventListener("input", updateSpeed);
