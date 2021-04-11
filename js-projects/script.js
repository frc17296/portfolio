var list = document.querySelectorAll('li');
var hamburger = document.querySelector('.icon');
var arrow = document.querySelector('.arrow');
var menu = $('#menu');
var project1 = document.getElementById('morra-card');
var project2 = document.getElementById('gif-card');


list.forEach((el) => {
  console.log(el)
  el.addEventListener('click', function() {
    if(el.classList == "morra") {
      project1.classList.add('is-visible');
      project2.classList.remove("is-visible")
    } else if (el.classList == "gif") {      
      project2.classList.add('is-visible');
      project1.classList.remove("is-visible")

    } 
  })
});

hamburger.addEventListener('click', function() {    
  menu.animate({
    marginLeft: "+=250px"
  }, "slow")
});

arrow.addEventListener('click', function() {
  menu.animate({     
    marginLeft: "-=250px"           
  }, "slow"); 
});

