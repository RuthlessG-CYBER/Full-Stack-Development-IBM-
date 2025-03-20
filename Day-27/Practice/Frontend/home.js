const images = document.querySelectorAll('.slider img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateSlider() {
    images.forEach((img, i) => {
        img.classList.remove('active');
        img.style.transform = `scale(1)`; // Reset all images
    });

    images[index].classList.add('active');
    images[index].style.transform = `scale(1.5)`; // Enlarge active image
}

prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    updateSlider();
});

updateSlider();
