var button = document.getElementById('search-gif-btn');
var searchInput = $('#search-gif-input');
var form = $('#form')
var disabledTags = [];
var displayedGifs = [];

const addGif = function() {  
  var inputText = searchInput.val();
  if(searchInput.val().trim() === "") {
    alert('Inserimento non valido')
    return;
  }

  $.getJSON({
   url: "https://api.giphy.com/v1/gifs/search?q=" + inputText + "&api_key=70wgCdHMRNqJihmUMKyzsO6yq3Q17nhR",  
     success: function(res){
       var gifsData = res.data;
       var gifsWithCategory = gifsData.map(function(gif) {
         var gifWithCategory = gif;
         gifWithCategory.category = inputText;
 
         return gifWithCategory;
       });
 
       displayedGifs = displayedGifs.concat(gifsWithCategory);  
       updateGifsHtml();    
       searchInput.val("");
 
       var html = "";
       html += '<span class="tag is-success is-large favorite-category">';
       html += inputText;
       html += '<button class="delete is-small"><img src="./images/close.svg"></button>';
       html += "</span>"
       
       $('.tags').append(html);
     }
   });
};

form.submit(function(e) {
  e.preventDefault() 
  addGif()
});  

button.addEventListener('click', function() {
   addGif()
});

$('body').on('click', '.tag', function(event) {
  
  $(this).toggleClass("is-success");
  $(this).toggleClass("is-danger");

  if($(this).hasClass('is-danger')) {
    disabledTags.push($(this).text().trim().toLowerCase());
  } else {
    disabledTags = disabledTags.filter(function(disableTag) {
      return disableTag == $(this).text().trim().toLowerCase();
    }); 
  }
  hideDisabledTags()  
});

$('body').on('click', ".tag .delete", function(event) {
  event.stopPropagation();
  var category = $(this).parent().text().trim().toLowerCase();  
  displayedGifs = displayedGifs.filter(function(gif) {
  return gif.category != category;
  });
  updateGifsHtml();
  $(this).parent().remove();
})

$.getJSON({  
  url: "https://api.giphy.com/v1/gifs/trending?api_key=70wgCdHMRNqJihmUMKyzsO6yq3Q17nhR", 
  success: function(res){
    var gifsData = res.data; 
    var gifsWithCategory = gifsData.map(function(gif) {
    var gifWithCategory = gif;
    gifWithCategory.category = "trending";

    return gifWithCategory;
  });

  displayedGifs = displayedGifs.concat(gifsWithCategory); 
  updateGifsHtml();
  }
});

function hideDisabledTags() {
  displayedGifs.forEach(function(gif) {
   if(disabledTags.indexOf(gif.category) >= 0) {
     $("#" + gif.id).hide();
   } else {
      $("#" + gif.id).show();
   }
  });
}

function updateGifsHtml() {
var html = "";
  shuffle(displayedGifs).forEach(function(gif) {
    var url = gif.images.downsized_medium.url;
    var height = gif.images.downsized_medium.height;
    var width = gif.images.downsized_medium.width;

    html += "<div class='gif' id=" +  gif.id + ">";
    html += "<img src=" + url + " height=" + height + " width=" + width + "/>";
    html += "</div>"           
  });
  
  $('#gifs-container').html(html);
}

function shuffle(array) {
  var currentIndex;
  var swapElement;
  var randomIndex;

  for (currentIndex = 0; currentIndex < array.length; currentIndex++) {
    randomIndex = Math.floor(Math.random() * array.length);
    swapElement = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = swapElement;
  }
  return array;
}