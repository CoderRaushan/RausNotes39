const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const loopBtn = document.getElementById('loop-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const trackTitle = document.getElementById('track-title');
const trackImage = document.getElementById('track-image');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationTimeEl = document.getElementById('duration-time');
const speedBtn = document.getElementById('speed-btn');
const speedOptions = document.getElementById('speed-options');

let isPlaying = false;
let isLooping = false;
let playbackRate = 1;
let currentTrackIndex = 0;

const tracks = [
    { title: "Bhaj Man Govinda Radhe", src: "/music/radhe govinda.mp3", image: "/images/Radhe Govinda.jpeg" },
    { title: "Chaat ke Rahab Othlali", src: "/music/chat ke rahab othlali .mp3", image: "/images/char ke rahab.jpeg" }
];
const loadTrack = (index) => {
    const track = tracks[index];
    audioPlayer.src = track.src;
    trackTitle.textContent = track.title;
    trackImage.src = track.image;
    trackImage.style.animation = 'none'; 
    void trackImage.offsetWidth; 
};

const togglePlayPause = () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        trackImage.style.animation = 'none'; // Stop rotation when paused
    } else {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        trackImage.style.animation = 'spin 24s linear infinite'; 
    }
    isPlaying = !isPlaying;
};

const toggleLoop = () => {
    isLooping = !isLooping;
    audioPlayer.loop = isLooping;
    loopBtn.innerHTML = isLooping ? '<i class="fa-solid fa-arrows-rotate"></i>' : '<i class="fa-solid fa-arrow-right-arrow-left"></i>';
};

const toggleSpeedOptions = () => {
    speedOptions.classList.toggle('hidden');
};

speedBtn.addEventListener('click', () => {
    speedOptions.classList.toggle('visible');
});

speedBtn.addEventListener("click",()=>
{
    if(!event.target.speedOptions)
	{
		speedOptions.classList.toggle('visible');
	}
});

speedOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        // Set playback rate
        playbackRate = parseFloat(e.target.dataset.speed);
        audioPlayer.playbackRate = playbackRate;
        console.log(`Speed set to ${playbackRate}`); // Debugging log
        // Hide speed options after selection
        speedOptions.classList.add('hidden');
    }
});

const playNextTrack = () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    trackImage.style.animation = 'spin 2s linear infinite'; // Start rotation for the next track
};

// Add an event listener for when the track ends
audioPlayer.addEventListener('ended', playNextTrack);

const playPrevTrack = () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    trackImage.style.animation = 'spin 2s linear infinite'; // Start rotation for the previous track
};

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const updateProgress = () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;

    // Update the progress bar background
    progressBar.style.setProperty('--progress-percent', `${progressPercent}%`);

    currentTimeEl.textContent = formatTime(currentTime);
    durationTimeEl.textContent = formatTime(duration);
};

const setProgress = (e) => {
    const duration = audioPlayer.duration;
    const newTime = (e.target.value / 100) * duration;
    audioPlayer.currentTime = newTime;
};

audioPlayer.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', setProgress);
playPauseBtn.addEventListener('click', togglePlayPause);
loopBtn.addEventListener('click', toggleLoop);
speedBtn.addEventListener('click', toggleSpeedOptions);
prevBtn.addEventListener('click', playPrevTrack);
nextBtn.addEventListener('click', playNextTrack);

// Load the initial track
loadTrack(currentTrackIndex);
