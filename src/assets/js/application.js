

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });  

  var swiper2 = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "3",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }, 
    breakpoints: {
      1440: {
          slidesPerView: 3,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      0: {
          slidesPerView: 1,
      }
  },   
  });

  // swiper
  let swiper1 = new Swiper(".about", {
    slidesPerView: 3,
    spaceBetween: 100,
    paginationClickable: true,  
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1440: {
            slidesPerView: 3,
           
        },
        1024: {
            slidesPerView: 2,
          
        },
        768: {
            slidesPerView: 1.5,
            
        },
        0: {
            slidesPerView: 1,
           
        }
    },
  });

// var swiper = new Swiper(".swiper-container", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     loop:true,
//     slidesPerView: "3",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });