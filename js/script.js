// Sticky Navbar
$(".topnav").sticky();

// Animate on scroll
const animated = document.querySelectorAll(".anim");
const text = document.getElementById("text-about");
const aboutImg = document.getElementById("about-img");
const btnCV = document.getElementById("btn-CV");
const desc1 = document.getElementById("anim-desc-1");
const desc2 = document.getElementById("anim-desc-2");
const desc3 = document.getElementById("anim-desc-3");
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      if (entry.target == text) {
        entry.target.classList.add("fromTop-in-viewport");
        aboutImg.classList.add("zoom-in-viewport");
        btnCV.classList.add("show");
      }
      if (entry.target == desc1) {
        entry.target.classList.add("fromLeft-in-viewport");
      }
      if (entry.target == desc2) {
        entry.target.classList.add("fromRight-in-viewport");
      }
      if (entry.target == desc3) {
        entry.target.classList.add("fromLeft-in-viewport");
      }
      if (entry.target == img1) {
        entry.target.classList.add("fromRight-in-viewport");
      }
      if (entry.target == img2) {
        entry.target.classList.add("fromLeft-in-viewport");
      }
      if (entry.target == img3) {
        entry.target.classList.add("fromRight-in-viewport");
      }
      observer.unobserve(entry.target);
    }
  });
});

animated.forEach((anim) => {
  observer.observe(anim);
});

// Hamburger Navbar
function toggleHamMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    ham.style.visibility = "hidden";
  } else {
    x.className = "topnav";
  }
}

// Back to top
window.onscroll = () => {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (window.pageYOffset > 500) {
    backToTopBtn.style.visibility = "visible";
  } else {
    backToTopBtn.style.visibility = "hidden";
  }
};

// Add projects background images on small screen
if (window.matchMedia("(max-width: 490px)").matches) {
  desc1.style.background = `linear-gradient(90deg,#0f171e 10%,rgba(15,23,30,.8) 60%,rgba(15,23,30,0.1)), url('./assets/img/vue-logo.png')`;
  desc2.style.background = `linear-gradient(270deg,#0f171e 10%,rgba(15,23,30,.8) 60%,rgba(15,23,30,0.1)), url('./assets/img/angular-logo.png')`;
  desc3.style.background = `linear-gradient(90deg,#0f171e 10%,rgba(15,23,30,.8) 60%,rgba(15,23,30,0.1)), url('./assets/img/react-logo.png')`;
}
