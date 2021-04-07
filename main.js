var hamburger = $('.header-right a');
var menu = $('.hamburger-menu');
var closeX = $('.close');

hamburger.click( function(){
    menu.fadeIn();
});
closeX.click( function(){
    menu.fadeOut();
});