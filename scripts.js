

        

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.slider-proyectos', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints:{
        0:{
        slidesPerView: 1,
        spaceBetween: 20
        },
        620:{
        slidesPerView: 2,
        spaceBetween: 20
        },
        1024:{
        slidesPerView: 3,
        spaceBetween: 20
        }
    }
  
  });
});  




function topFunction() {
  
  if (window.location.pathname.endsWith("/index.html")  || window.location.pathname.endsWith("/")){ 
    window.scrollTo({top: 0, behavior: 'smooth'});
  } else{
    window.location.href = "index.html";
  }
  
}