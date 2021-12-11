//Select header image and logo
var topImg = $("#top");
var logo = topImg.find("img");

//Add event listener to body, that checks for scroll
$("body").scroll(scrollChange);

//When scroll position changes, fades out logo and darkens image
function scrollChange(){
    var scrollPosition = document.getElementById("top").scrollTop; //Get current scroll position
    if(scrollPosition <= 25){
        var logoSP = scrollPosition*.04; //Multiplies scroll position by .04, for reducing logo's opacity as user scrolls on page
        logo.css("opacity", 1-logoSP);
    }
}