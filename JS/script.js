ScrollReveal({
  mobile: false,
}
)

ScrollReveal().reveal('.header', {
  delay: 500,
  reset: false,
  mobile: false,
});

ScrollReveal().reveal('.showcase-content h1', {
  scale: 2,
  duration: 3000,
  mobile: false,
});

ScrollReveal().reveal('.showcase-content', {

  scale: 2,
  duration: 3000,
  delay: 500,
  mobile: false,
});

ScrollReveal().reveal('.showcase-search', {
  duration: 1500,
  delay: 500,
});

ScrollReveal().reveal('.destinations h2', {
  reset: true,
  duration: 1500,
  delay: 500,
  origin: 'left',
  distance: '50px',
});

ScrollReveal().reveal('.destinations-cards', {
  duration: 1500,
});

ScrollReveal().reveal('.section-title', {
  reset: true,
  duration: 1500,
  delay: 500,
  origin: 'left',
  distance: '50px',
});
ScrollReveal().reveal('.hotel-card , #tours, #activities', {
  duration: 1500,
  origin: 'left',
  distance: '50px',
});

ScrollReveal().reveal('.about-content', {
  reset: true,
  duration: 1500,
  origin: 'left',
  distance: '50px',
});
ScrollReveal().reveal('.about-img', {
  reset: true,
  duration: 1500,
  origin: 'right',
  distance: '50px',
});

const swiper = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  speed: 600,
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    240: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// hotel rxpand collapse fun
const hotelButton = document.querySelector('.hotel-button');
const hotelCard = document.querySelectorAll('.off');
const text = hotelButton.innerText;

hotelButton.addEventListener('click', (e) => {
  e.preventDefault();
  hotelCard.forEach((x) => {
    x.classList.toggle('on');
  });

  if (e.target.innerHTML !== 'less <img src="/Imgs/icons/bleft.png">') {
    e.target.innerHTML = `less <img src="/Imgs/icons/bleft.png" >`;
  } else {
    e.target.innerHTML = `view all <img src="/Imgs/icons/bleft.png" >`;
  }
});



// 
const toogleOn = document.querySelector('.toggleOn');
const toogleClose = document.querySelector('.toggleClose');
const navbar = document.querySelector('.navbar');
const navlists = document.querySelectorAll('.navlist');

toogleOn.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.add('navlistOn');
  toogleClose.classList.add('toggleCloseOn');
  toogleOn.classList.add('toggleOnClose');
});

toogleClose.addEventListener('click', (e) => {
  navbar.classList.remove('navlistOn');
  toogleClose.classList.remove('toggleCloseOn');
  toogleOn.classList.remove('toggleOnClose');
});

console.log('navlists');
navlists.forEach((xy) => {
  xy.addEventListener('click', (x) => {
    navbar.classList.remove('navlistOn');
    toogleClose.classList.remove('toggleCloseOn');
    toogleOn.classList.remove('toggleOnClose');
  });
});
