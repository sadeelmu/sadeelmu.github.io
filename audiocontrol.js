document.addEventListener("DOMContentLoaded", function() {
    const radioPlayer = document.getElementById('radioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    playPauseButton.innerHTML = radioPlayer.paused ? playIcon : pauseIcon;

    playPauseButton.addEventListener('click', function() {
        if (radioPlayer.paused) {
            radioPlayer.play();
            playPauseButton.innerHTML = pauseIcon;
        } else {
            radioPlayer.pause();
            playPauseButton.innerHTML = playIcon;
        }
    });
});
