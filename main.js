$(".input-selector").on("click", function(){
  $(".heder-search-content").addClass("active");
});

$(document).on('click', function(event) {
if (!$(event.target).closest('.input-selector').length)  {
      $(".heder-search-content").removeClass("active");
}
});


$(".header-select-btn").on("click", function(){
  $(".header-set-btn").toggleClass("show");
});

$(document).on('click', function(event) {
if (!$(event.target).closest('.header-select-btn').length)  {
      $(".header-set-btn").removeClass("show");
}
});

$(".header-search .select div").on("click", function(){
  $(".header-search .select ul").toggleClass("show");
});

$(document).on('click', function(event) {
if (!$(event.target).closest('.header-search .select div').length)  {
      $(".header-search .select ul").removeClass("show");
}
});

$(".languge-link").on("click", function(){
  $(".item-language").toggleClass("show");
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('.languge-link').length)  {
        $(".item-language").removeClass("show");
  }
  });


  $(".toggle").on("click", function(){
    $(".toggle").toggleClass("active");
    $(".mobile-nemu").toggleClass("active");
  });