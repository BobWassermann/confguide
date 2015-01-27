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


  var bg = $('.bucket .card .image').eq(0).css('background-image').slice(4, -1);
  
  var gradientRed     = 'linear-gradient(#FF5E3A, #FF2A68)';
  var gradientOrange  = 'linear-gradient(#FF9500, #FF5E3A)';
  var gradientYellow  = 'linear-gradient(#FFDB4C, #FFCD02)';
  var gradientGreen   = 'linear-gradient(#87FC70, #87FC70)';
  var gradientLBlue   = 'linear-gradient(#52EDC7, #52EDC7)';

    $('.bucket .card .image').eq(0).css({'background-image' : 'url('+bg+'), '+gradientRed});
    $('.bucket .card .image').eq(1).css({'background-image' : 'url('+bg+'), '+gradientLBlue});
    $('.bucket .card .image').eq(2).css({'background-image' : 'url('+bg+'), '+gradientYellow});
    $('.bucket .card .image').eq(3).css({'background-image' : 'url('+bg+'), '+gradientGreen});
}

// Nav
$(window).scroll(function(){
  $('nav').css({'margin-left' : -$(window).scrollTop()*0.22 });
});

$(document).ready(calls);
$(window).resize(calls);

