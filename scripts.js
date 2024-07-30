


function topFunction() {
  
  if (window.location.pathname.endsWith("/index.html")  || window.location.pathname.endsWith("/")){ 
    window.scrollTo({top: 0, behavior: 'smooth'});
  } else{
    window.location.href = "index.html";
  }
  
}