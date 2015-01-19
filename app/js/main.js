'use strict';
/*jshint undef:false */
function calls(){
  
  $('.bucket.all').each(function(){
    var elemCount = $(this).children().size();
    if(elemCount === 1) {$(this).children().addClass('first');}
    if(elemCount < 4) {
     $(this).children().css({'width' : $(window).width() / elemCount, 'height' : $(window).height()});
    } else {
     $(this).children().css({'width' : $(window).width() / elemCount*2, 'height' : $(window).height()/2});
    }
  });
}

$(document).ready(calls);
$(window).resize(calls);

