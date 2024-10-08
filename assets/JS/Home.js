import { komunitas } from './DataLocal.js'; 
// Navbar
document.addEventListener("DOMContentLoaded", function() {
    let ul = document.querySelector('.ul');
    let btn = document.querySelector('.btn-container');
    let list = document.getElementById('list');

    list.addEventListener('click', function() {
        ul.classList.toggle('active');
        btn.classList.toggle('active');
    });
});

// Community Mapping
window.addEventListener('DOMContentLoaded', () => {
    const komunitasList = document.getElementById('komunitas-list');

    komunitas.forEach(item => {
        const komunitasFlexContainer = document.createElement('div');
        komunitasFlexContainer.classList.add('komunitas-flex-container');

        const komunitasContainer = document.createElement('div');
        komunitasContainer.classList.add('komunitas-container');

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.head;

        const textContainer = document.createElement('div');
        textContainer.classList.add('komunitas-text');
        textContainer.innerHTML = `<h1>${item.head}</h1><p>${item.paragaph}</p>`;

        const btn = document.createElement('div');
        btn.classList.add('btn');
        const btnImg = document.createElement('img');
        btnImg.src = "/assets/Image/Komunitas/ikuti.png";
        btnImg.alt = `Ikuti ${item.head}`;

        btn.appendChild(btnImg);

        komunitasContainer.appendChild(img);
        komunitasContainer.appendChild(textContainer);
        komunitasContainer.appendChild(btn);
        komunitasFlexContainer.appendChild(komunitasContainer);
        komunitasList.appendChild(komunitasFlexContainer);

        btnImg.addEventListener('click', () => {
            window.location.href = `/Layout/Isi-Komunitas.html?id=${item.id}`;
        });
    });
});

// fade 
function onScroll() {
    const elements = document.querySelectorAll('.learning');
    const elementsHome = document.querySelectorAll('.about-container');
    const elementsCore = document.querySelectorAll('.core');
    const elementsKomunitas = document.querySelectorAll('.komunitas');
    const elementsTestimonial = document.querySelectorAll('.testimonial-flex');
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - 100) { 
        el.classList.add('active');  
      } else {
        el.classList.remove('active'); 
      }
    });

    elementsHome.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - 100) { 
        el.classList.add('active');  
      } else {
        el.classList.remove('active'); 
      }
    });

    elementsCore.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - 100) { 
        el.classList.add('active');  
      } else {
        el.classList.remove('active'); 
      }
    });

    elementsKomunitas.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - 100) { 
        el.classList.add('active');  
      } else {
        el.classList.remove('active'); 
      }
    });

    elementsTestimonial.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - 100) { 
        el.classList.add('active');  
      } else {
        el.classList.remove('active'); 
      }
    });
  }

  window.addEventListener('scroll', onScroll);