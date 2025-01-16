const modal = document.querySelectorAll('.services__modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
})

modalClose.forEach((modalClose) =>{
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})

const swiperTestimonial = new Swiper('.testimonial__swiper', {
   loop: true,
   spaceBetween: 32,
   grabCursor: true,

   pagination: {
     el: '.swiper-pagination',
     dynamicBullets: true,
     clickable: true,
   },
});

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

  document.addEventListener('DOMContentLoaded', () => {
    const professions = ["Web Developer", "Frontend Developer", "Mobile Application Developer", "Backend Developer","AI Enthusiast"];
    let index = 0;

    const spanElement = document.querySelector('.home__profession span');

    function updateProfession() {
      spanElement.innerHTML = professions[index];
      index = (index + 1) % professions.length;
    }

    setInterval(updateProfession, 3000); // Change every 3 seconds
    updateProfession(); // Initial call to set the first profession
  });


