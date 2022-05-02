// swiper
let swiper = new Swiper(".discover", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

let profile = new Swiper(".profile", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next.profile-next",
        prevEl: ".swiper-button-prev.profile-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1.1,
        }
    },
});

// AOS Animation 
AOS.init();