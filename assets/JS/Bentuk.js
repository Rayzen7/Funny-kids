import { Bentuk } from "./DataLocal.js";

function playAudioEvent(event) {
    const id = event.target.dataset.id;
    const audioInfo = Bentuk.find(item => item.id === parseInt(id));

    if (audioInfo) {
        const audio = new Audio(audioInfo.audio);
        audio.play();
    }
}

document.querySelectorAll('.bentuk-container img').forEach(img => {
    img.addEventListener('click', playAudioEvent);
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const song = document.getElementById('song');

    audio.muted = true;
    song.muted = true;
    song.volume = 0.5;

    document.addEventListener('click', function() {
        audio.muted = false;
        audio.play().then(() => {
            console.log("Audio playback started");

            setTimeout(function() {
                song.muted = false;
                song.play().then(() => {
                    console.log("Song play started");
                }).catch(error => {
                    console.error("Failed to play audio", error);
                });
            }, 5000);
        }).catch(error => {
            console.error('Failed to play audio', error);
        });
    }, { once: true });
});