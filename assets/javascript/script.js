//nav bar event handler
$(".nav-link").click(function(){
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    toggleView(this.id);
})

//show and hide sections based on user navigation
function toggleView (display){
    $("#home").hide();
    $("#portfolio").hide();
    $("#contact").hide();

    $("#" + display.replace(/nav-/, "")).show();
}

//resume download button
$("#resume-download").on("click", function(event){
    event.preventDefault();
    window.location.href = "./assets/files/Zelazny Resume.pdf";
})