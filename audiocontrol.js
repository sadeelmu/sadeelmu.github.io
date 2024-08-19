const radioPlayer = document.getElementById('radioPlayer');
const playButton = document.querySelector('button');

function togglePlay() {
    if (radioPlayer.paused) {
        radioPlayer.play();
        playButton.textContent = 'Pause';
    } else {
        radioPlayer.pause();
        playButton.textContent = 'Play';
    }
}
