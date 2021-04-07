var hamburger = $('.hamburger-menu');
var closeX = $('ul li');

hamburger.mouseenter( function(){
    closeX.fadeIn();
}),mouseleave( function(){
    closeX.fadeOut();
})