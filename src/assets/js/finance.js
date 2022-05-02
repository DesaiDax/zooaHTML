// animation
{
    AOS.init();
}

//searchbar
var searchbar = document.getElementById('search-button');
searchbar.addEventListener('click', ()=>{
    searchbar.nextElementSibling.classList.toggle('w-0')
})

// swiper
let swiper = new Swiper(".Proffesional", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1800: {
            slidesPerView: 3.2,
            spaceBetween: 20,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.6,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
        }
    },
});