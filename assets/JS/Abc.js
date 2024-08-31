import { audioAbjad } from "./DataLocal.js";

function playAudioEvent(event) {
    const id = event.target.dataset.id;
    const audioInfo = audioAbjad.find(item => item.id === parseInt(id));

    if (audioInfo) {
        const audio = new Audio(audioInfo.audio);
        audio.play();
    }
}

document.querySelectorAll('.Abc-container img').forEach(img => {
    img.addEventListener('click', playAudioEvent); 
});
