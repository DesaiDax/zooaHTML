// swiper
let swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        0: {
            slidesPerView: 1.2,
        }
    },
});
let swiper1 = new Swiper(".swiper-blog", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1440: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        0: {
            slidesPerView: 1.1,
            spaceBetween: 15,
        }
    },
});

// animation
AOS.init();

