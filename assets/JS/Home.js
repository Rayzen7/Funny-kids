document.addEventListener("DOMContentLoaded", function() {
    let ul = document.querySelector('.ul');
    let btn = document.querySelector('.btn-container');
    let list = document.getElementById('list');

    list.addEventListener('click', function() {
        ul.classList.toggle('active');
        btn.classList.toggle('active');
    });
});
