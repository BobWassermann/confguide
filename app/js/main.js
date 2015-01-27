'use strict';
/*jshint undef:false */
function calls(){
  
  $('.bucket.all').each(function(){
    var elemCount = $(this).children().size();
    if(elemCount === 1) {$(this).children().addClass('first');}
    if(elemCount < 4) {
     $(this).children().css({'width' : $(window).width() / elemCount, 'height' : $(window).height()});
    } else {
     $(this).children().css({'width' : $(window).width() / 4, 'height' : $(window).height()/2});
    }
  });


  var bg = $('.bucket .card .image').eq(0).css('background-image');
  var gradientRed = 'linear-gradient(#FF5E3A, #FF2A68)';
  $('.bucket .card .image').eq(0).css('background-image', 'url( '+bg.slice(4, -1)+', linear-gradient(#FF5E3A, #FF2A68))')
}

// Nav
$(window).scroll(function(){
  $('nav').css({'margin-left' : -$(window).scrollTop()*0.22 });
});

$(document).ready(calls);
$(window).resize(calls);

