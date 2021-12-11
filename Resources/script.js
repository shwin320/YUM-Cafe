//Select header image and logo
var topImg = $("#top");
var logo = topImg.find("img");

//When scroll position changes, fades out logo and darkens image
function scrollChange(){
    var scrollPosition = document.getElementById("header")[0].scrollTop; //Get current scroll position
    console.log(scrollPosition);
    if(scrollPosition <= 25){
        var logoSP = scrollPosition*.04; //Multiplies scroll position by .04, for reducing logo's opacity as user scrolls on page
        logo.css("opacity", 1-logoSP);
    }
}