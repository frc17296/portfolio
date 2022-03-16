// Sticky Navbar
 $(".topnav").sticky();

// Animate on scroll
const animated = document.querySelectorAll('.anim');
const text = document.getElementById('text-about');
const desc1 = document.getElementById('anim-desc-1');
const desc2 = document.getElementById('anim-desc-2');
const desc3 = document.getElementById('anim-desc-3');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');

const observer = new IntersectionObserver(function(entries, observer) {

  entries.forEach(entry => {
    if (!entry.isIntersecting){
     return;
    } else {
      
      if (entry.target == text) {
        console.log(entry);
        entry.target.classList.add('text-in-viewport')
      }
      if (entry.target == desc1) {
        entry.target.classList.add('fromRight-in-viewport')
      }
      if (entry.target == desc2) {
        entry.target.classList.add('fromRight-in-viewport')
      }
      if (entry.target == desc3) {
        entry.target.classList.add('fromRight-in-viewport')
      }    
      if (entry.target == img1) {
        entry.target.classList.add('fromLeft-in-viewport')
      }
      if (entry.target == img2) {
        entry.target.classList.add('fromLeft-in-viewport')
      }
      if (entry.target == img3) {
        entry.target.classList.add('fromLeft-in-viewport')
      }
      observer.unobserve(entry.target);
    }
  });
  
});

animated.forEach(anim => {
 observer.observe(anim);
});

// Hamburger Navbar 
function toggleHamMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    ham.style.visibility = 'hidden';
  } else {
    x.className = "topnav";
  }
}

// Back to top
window.onscroll = () => {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if(window.pageYOffset > 500) {
    backToTopBtn.style.visibility = 'visible';
  } else {
    backToTopBtn.style.visibility = 'hidden'; 
  }
}

