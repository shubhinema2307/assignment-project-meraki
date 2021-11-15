$(document).ready(function(){

    $('.testi-class').slick({
        dots: true,
        speed: 700,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $("#responsive-menu-bar").click(function(){
        $("header").toggleClass("responsive-header");
    })


});