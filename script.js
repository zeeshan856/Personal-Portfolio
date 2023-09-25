$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }
        else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    //slide up script

     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
     });

    /*Toggle menu navbar script*/
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //typing Animation Sctipt
    var typed = new Typed(".typing",{
        strings: ["Data Engineer","UI Developer"],
        typedSpeed:100,
        backSpeed:90,
        loop: true 
    });
    var typed = new Typed(".typing-2",{
        strings: ["Data Engineer","UI Developer"],
        typedSpeed:100,
        backSpeed:90,
        loop: true 
    });

});
