import { komunitas } from "./DataLocal.js";

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id'); // Get the ID from the URL query parameter

    if (id) {
        // Find the community data based on ID
        const community = komunitas.find(item => item.id == id);

        if (community) {
            // Set the content of the page based on the community data
            document.getElementById('komunitas-img').src = community.img;
            document.getElementById('komunitas-head').textContent = community.head;
            document.getElementById('komunitas-paragraph').textContent = community.paragaph;
        } else {
            console.error('Community not found');
        }
    } else {
        console.error('No ID provided');
    }
});