const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;

function showSlide() {
 if (slideIndex === slides.length-1) {
        nextBtn.style.display = 'none';
    }
    else if (slideIndex === 0) {
        prevBtn.style.display = 'none';
    }
    else{
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';

}

function prevSlide() {
        slideIndex--;
        showSlide();
}

function nextSlide() {
        slideIndex++;
        showSlide();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide();