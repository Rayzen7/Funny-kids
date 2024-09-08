import { komunitas } from "./DataLocal.js";

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id'); 

    if (id) {
        const community = komunitas.find(item => item.id == id);

        if (community) {
            document.getElementById('komunitas-img').src = community.img;
            document.getElementById('komunitas-head').textContent = community.head;
            document.getElementById('komunitas-paragraph').textContent = community.paragaph;
            // bubble chat
            document.getElementById('chatName-img').src = community.corla;
            document.getElementById('chat-name').textContent = community.corlaName;
            document.getElementById('chat').textContent = community.corlaChat;
            document.getElementById('chatName-img1').src = community.azka;
            document.getElementById('chat-name1').textContent = community.azkaName;
            document.getElementById('chat1').textContent = community.azkaChat;
            // bubble chat anda
            document.getElementById('chatName-imgAnda').src = community.anda;
            document.getElementById('chat-name-anda').textContent = community.andaName;
            document.getElementById('chat-anda').textContent = community.andaChat;
        } else {
            console.error('Community not found');
        }
    } else {
        console.error('No ID provided');
    }
});