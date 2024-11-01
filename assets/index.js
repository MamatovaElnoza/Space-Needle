window.addEventListener('scroll', function () {
    const scrollSection = document.querySelector('.scroll');
    if (window.scrollY > 50) {
        scrollSection.classList.add('scrolled');
    } else {
        scrollSection.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function () {
    const scrollSection = document.querySelector('.scroll');
    if (window.scrollY > 50) {
        scrollSection.classList.add('smaller');
    } else {
        scrollSection.classList.remove('smaller');
    }
});


window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const elevatedWord = document.querySelector('.elevated');

    elevatedWord.style.transform = `translateY(-${scrollY * 0.1}px)`;
});
