$(document).ready(function(){ 
    $(".menu-open").on('click',function(){
        $(".menu-close").css("display","flex");
        $(".principal-menu").css("display","block");
        $("#main").addClass("main");
       $(".menu-open").css("display","none");
    })

    $(".menu-close").on('click',function(){
        $(".menu-open").css("display","flex");
        $(".principal-menu").css("display","none");
        $(".menu-close").css("display","none");
        $("#main").removeClass("main")
     })

     new WOW().init();  
})
