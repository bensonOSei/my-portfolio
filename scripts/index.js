$(document).ready(function(){
    $("#hide").click(function(){
        $("#navItems").toggle("fast");
    });
    $("#bars").click(function(){
        $("#sideNav").toggle("fast");
    });

    $("#dark").click(function(){
        $("body").toggleClass("darkMode");

    })
    $("#darkM").click(function(){
        $(".words, .myImg").toggleClass("darkModeM");
    })

    $("#socials").click(function(){
        $("#dropSocials").toggle("fast");
    })
    $("#socialsM").click(function(){
        $("#dropSocialsM").toggle("fast");
    })

});

