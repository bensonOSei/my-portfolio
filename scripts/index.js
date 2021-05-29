$(document).ready(function(){
    $("#hide").click(function(){
        $("#navItems").toggle("fast");
    });
    $("#bars").click(function(){
        $("#sideNav").toggle("fast");
    });

    $("#dark").click(function(){
        $("body").toggleClass("darkMode");
        $(".bar").css("background-color","white");
        $(this).text("Light Mode")

    })

});