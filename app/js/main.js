'use strict';
/*jshint undef:false */
function calls(){

  $('.bucket.locale .card').each(function(){
    var thisLocation = geoplugin_countryName().toLowerCase();
    $(this).is('.' + thisLocation) ? $(this).show() : $(this).remove();
  });
  
  $('.bucket.locale, .bucket.all').each(function(){
    var elemCount = $(this).children().size();
    if(elemCount === 1) {$(this).children().addClass('first');}
    if(elemCount < 4) {
     $(this).children().css({'width' : $(window).width() / elemCount, 'height' : $(window).height()});
    } else {
     $(this).children().css({'width' : $(window).width() / elemCount*2, 'height' : $(window).height()/2});
    }
  });
  
  // Nav  
  $('nav h1.location').text(geoplugin_countryName());
  $(window).scroll(function(){
    $('nav').css({'margin-left' : -$(window).scrollTop()*0.3});
    $(window).scrollTop() >= $('.bucket.locale').offset().top ? $('nav a:eq(1)').css('background', 'black') : $('nav a:eq(1)').css('background', '');
    
  });
  
}

$(document).ready(calls);
$(window).resize(calls);

