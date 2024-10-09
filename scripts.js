

        

document.addEventListener('DOMContentLoaded', function () {
  console.log('Anda, no esperaba verte por aquí...')
  const swiper = new Swiper('.slider-proyectos', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    allowTouchMove: true,
    
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    
    
    
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

document.addEventListener('DOMContentLoaded', function() {
  // Show filtered elements
  function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  // Hide elements that are not selected
  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Execute the function and show all columns
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("grid-project");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
  }

  function searchProjects(c){
    var x, i;
    x = document.getElementsByClassName("grid-project");
    if (c == "") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].innerText.toLowerCase().indexOf(c.toLowerCase()) > -1) AddClass(x[i], "show");
    }
  }

  document.getElementById('filtro-proyectos').addEventListener('change', function() {
    filterSelection(this.value);
  });

  document.getElementById('buscador').addEventListener('keyup', function() {
    searchProjects(this.value);
  });  

  filterSelection("all");
});