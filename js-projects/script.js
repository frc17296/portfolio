var list = document.querySelectorAll('li');
var hamburger = document.querySelector('.icon');
var arrow = document.querySelector('.arrow');
var menu = $('#menu');
var project1 = document.getElementById('morra-card');
var project2 = document.getElementById('gif-card');
var projectsSection = document.querySelector("#projects")

list.forEach((el) => {
  
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
  message.style.display = "none";
  menu.animate({
    marginLeft: "+=250px"
  }, "slow")
});

arrow.addEventListener('click', function() {
  menu.animate({     
    marginLeft: "-=250px"           
  }, "slow"); 
});


var main = document.querySelector("main");
const myMessage = `
<h4> Clicca qui </h4>
`
;
var message = document.createElement("div");
message.setAttribute("class", "message");
message.innerHTML = myMessage;
main.prepend(message);