// tailwind config
tailwind.config = {
    theme: {
        extend: {
            colors: {
                lightbeige: "#FD7324",
                seafoam: "#08D665",
                lapis: "#3399FF",
                cobaltblue: "#004AD9",
                softRed: "#FD4F56",
                dodgerBlue: "#18A0FB",
                indigo:"#C07CC5",
                sunshine:"#F7B734"
            }
        }
    }
};
// scroll-header
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 90) {
        document.querySelector("header").classList.add('scroll-header');
    } else {
        document.querySelector("header").classList.remove('scroll-header');
    }
})
// menu
let menu = document.getElementById("menu-btn")
window.addEventListener("resize", function () {
    let mobile_menu = document.getElementById("mobile-menu")
    if (this.screen.width > 1024) {
        mobile_menu.classList.add('translate-x-[-110%]')
    }
}, true)
menu.addEventListener('click', () => {
    menu.classList.toggle('sm:menu-icon');
    let mobile_menu = document.getElementById("mobile-menu")
    if (mobile_menu.classList.contains('translate-x-[-110%]')) {
        mobile_menu.classList.remove('translate-x-[-110%]')
        menu.classList.add('sm:menu-icon');
    }
    else {
        mobile_menu.classList.add('translate-x-[-110%]')
        menu.classList.remove('sm:menu-icon');
    }
})

let closeMenu = document.getElementById('closeMenu')
closeMenu.addEventListener('click', () => {
    let mobile_menu = document.getElementById("mobile-menu")
    mobile_menu.classList.add('translate-x-[-110%]')
})

// collapse
document.querySelectorAll('[data-toggle="collapse"]').forEach((element, i) => {
    element.addEventListener('click', () => {
        element.querySelector('.rotate-icon').classList.toggle('rotate-180')
        element.nextElementSibling.classList.toggle('show')
    })
});



// Loader
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".preloader").style.visibility = "visible";
    } else {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};