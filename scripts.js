

        

document.addEventListener('DOMContentLoaded', function () {
  console.log('Anda, no esperaba verte por aquí...')
  const swiper = new Swiper('.slider-proyectos', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
  
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
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


document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('foto-alvaro');
  let originalBorderColor = getComputedStyle(img).borderColor;
  let interval;

  img.addEventListener('click', () => {
      if (interval) return; 

      let r = 255, g = 0, b = 0;
      let step = 5; 

      interval = setInterval(() => {
          
          img.style.borderColor = `rgb(${r}, ${g}, ${b})`;

          
          if (r === 255 && g < 255 && b === 0) {
              g += step;
          } else if (g === 255 && r > 0 && b === 0) {
              r -= step;
          } else if (g === 255 && b < 255 && r === 0) {
              b += step;
          } else if (b === 255 && g > 0 && r === 0) {
              g -= step;
          } else if (b === 255 && r < 255 && g === 0) {
              r += step;
          } else if (r === 255 && b > 0 && g === 0) {
              b -= step;
          }

          
          if (r === 255 && g === 0 && b === 0) {
              clearInterval(interval);
              interval = null;
              img.style.borderColor = originalBorderColor;
          }
      }, 1);
  });
});




function topFunction() {
  
  if (window.location.pathname.endsWith("/index.html")  || window.location.pathname.endsWith("/")){ 
    window.scrollTo({top: 0, behavior: 'smooth'});
  } else{
    window.location.href = "index.html";
  }
  
}