{
    AOS.init();
}

// swiper
let swiper = new Swiper(".about", {
    slidesPerView: 4,
    spaceBetween: 20,
    paginationClickable: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1.2,
        }
    },
});