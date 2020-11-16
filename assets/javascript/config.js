///////////event handlers///////////////
//nav bar event handlers
$("#nav-home").click(function(){
    console.log(this.id);
    $("#home").show();
    $("#portfolio").hide();
    $("#contact").hide();
})
$("#nav-portfolio").click(function(){
    $("#home").hide();
    $("#portfolio").show();
    $("#contact").hide();
})
$("#nav-contact").click(function(){
    $("#home").hide();
    $("#portfolio").hide();
    $("#contact").show();
})
//resume download button handler
$("#resume-download").on("click", function(event){
    event.preventDefault();
    window.location.href = "./assets/files/Zelazny Resume.pdf";
})