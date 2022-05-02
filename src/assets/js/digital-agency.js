// animation
{
    AOS.init();
}

//searchbar
var searchBorder = document.getElementById('search-border');
var searchbar = document.getElementById('search-button');
searchbar.addEventListener('click', ()=>{
    searchbar.nextElementSibling.classList.toggle('w-[200px]');
    searchBorder.classList.toggle('border-2')
})