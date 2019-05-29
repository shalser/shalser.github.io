// $(document).ready(function() {
 
//   $(window).resize(function(){
//     let windowWidth = $(window).width();
//     if(windowWidth > 992)$(".header-left_block-middle_text-right").addClass("hvr-grow");
//     else $(".header-left_block-middle_text-right").removeClass("hvr-grow");
//   });
// });

// $(window).resize(function () {
//     if($(window).width() <= 768){
//         $('.header-left_block-middle_text-right').removeClass('hvr-grow');
//     }
// });

// $(window).resize(function () {
//     if($(window).width() <= 768){
//         $('.header-left_block-subtitle_text').removeClass('hvr-grow');
//     }
// });

$(document).ready(function() {
 
    $(window).resize(function(){
      let windowWidth = $(window).width();
      if(windowWidth > 992)$(".header-left_block-subtitle_text").addClass("hvr-grow");
      else $(".header-left_block-subtitle_text").removeClass("hvr-grow");
    });
  });

$(document).ready(function() {
 
    $(window).resize(function(){
      let windowWidth = $(window).width();
      if(windowWidth > 992)$(".header-left_block-middle_text-right").addClass("hvr-grow");
      else $(".header-left_block-middle_text-right").removeClass("hvr-grow");
    });
  }); 
  
  $(document).ready(function() {
 
    $(window).resize(function(){
      let windowWidth = $(window).width();
      if(windowWidth > 992)$(".cancel_a").addClass("hvr-grow");
      else $(".cancel_a").removeClass("hvr-grow");
    });
  });   

  $(document).ready(function() {
 
    $(window).resize(function(){
      let windowWidth = $(window).width();
      if(windowWidth > 992)$(".services-carts_cart").addClass
      ("wow bounceInRight");
      else $(".services-carts_cart").removeClass("wow bounceInRight");
    });
  });  

  $(document).ready(function() {
 
    $(window).resize(function(){
      let windowWidth = $(window).width();
      if(windowWidth > 992)$(".services-carts_cart").addClass("wow bounceInDown");
      else $(".services-carts_cart").removeClass("wow bounceInDown");
    });
  });

  $(document).ready(function() {
 
    $(window).resize(function(){
      let windowWidth = $(window).width();
      if(windowWidth > 992)$(".services-carts_cart").addClass("wow bounceInLeft");
      else $(".services-carts_cart").removeClass("wow bounceInLeft");
    });
  });  


  $(document).ready(function() {
 
    $(window).resize(function(){
      let windowWidth = $(window).width();
      if(windowWidth > 992)$(".services-carts-down").addClass("wow bounceInUp");
      else $(".services-carts-down").removeClass("wow bounceInUp");
    });
  });  
  
  $(document).ready(function() {
 
    $(window).resize(function(){
      let windowWidth = $(window).width();
      if(windowWidth > 992)$(".team-foto_foto").addClass
      ("wow rollIn");
      else $(".team-foto_foto").removeClass("wow rollIn");
    });
  });  
