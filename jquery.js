var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

window.onload = function() {
  imgs = document.getElementById('slideshow').children;
  interval = 4000;
  currentPic = 0;
  imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
  imgs[currentPic].style.animation = 'fadey '+interval+'ms';
  var infiniteLoop = setInterval(function(){
    imgs[currentPic].removeAttribute('style');
    if ( currentPic == imgs.length - 1) { currentPic = 0; } else { currentPic++; }
    imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
    imgs[currentPic].style.animation = 'fadey '+interval+'ms';
  }, interval);
}



$(function(){
  $(".draggable").draggable({
      stack: ".draggable",
      containment: ".container"
  });

  $(".switch").click( function() {
      $(".container").toggleClass("darkmode");
  })

  $(".clickme").click( function() {
      $(".extra-info").fadeToggle("hide");
  })

  $(".hoverme").hover( function() {
      $(".gif").fadeToggle("gif");
  })

  $(".draggable2").draggable({
      axis: "x"
  });

  $(".draggable2").draggable({
      stack: ".draggable",
      containment: ".container"
  });

  $(".portrait").click( function() {
      $(".portrait").animate({
          width: "600px",
          height: "600px"
      })
  })

})

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
