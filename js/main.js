const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const bgHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('bg-header') 
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

const galleryImages = [
    "img/img10.jpg",
    "img/img9.jpeg",
    "img/img11.jpeg",
    "img/img12.jpeg"
  ];
  
  function renderGallery() {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = ''; 
  
    galleryImages.forEach(imageSrc => {
      const column = document.createElement('div');
      column.classList.add('column');
  
      const image = document.createElement('img');
      image.src = imageSrc;
  
      column.appendChild(image);
      galleryContainer.appendChild(column);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderGallery);
  