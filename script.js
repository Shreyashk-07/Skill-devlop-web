// Example interactive button
const button = document.querySelector('button');

button.addEventListener('click', () => {
  alert('Welcome to our space-themed website!');
});

// Example image slider
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
const slider = document.querySelector('.slider');
let currentImageIndex = 0;

setInterval(() => {
  currentImageIndex++;
  if (currentImageIndex === images.length) {
    currentImageIndex = 0;
  }
  slider.src = images[currentImageIndex];
}, 5000);
