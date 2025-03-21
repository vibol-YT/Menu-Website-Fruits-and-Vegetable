var swiper = new Swiper("#home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const menu = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menu.onclick= ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }
  window.scroll= ()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }