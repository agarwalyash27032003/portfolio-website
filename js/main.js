let slideIndex = 0;
      let timeoutId = null;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      
      showSlides();
      function currentSlide(index) {
           slideIndex = index;
           showSlides();
      }
     function plusSlides(step) {
        
        if(step < 0) {
            slideIndex -= 2;
            
            if(slideIndex < 0) {
              slideIndex = slides.length - 1;
            }
        }
        
        showSlides();
     }
      function showSlides() {
        for(let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dots[i].classList.remove('active');
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add('active');
         if(timeoutId) {
            clearTimeout(timeoutId);
         }
        timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
      }

function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("header-image");
  var z = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
    y.className+=" responsive";
    z.className+=" responsive";
    document.getElementById("ham-icon").src = "../Photos/Cross Menu.png";
  } else 
  {
    x.className = "topnav";
    y.className = "header-image-cls";
    z.className = "pad-left";
    document.getElementById("ham-icon").src = "../Photos/Hamburger icon.png";
  }
}