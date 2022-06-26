
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["JR DATA ANALYST"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["JR DATA ANALYST"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
});