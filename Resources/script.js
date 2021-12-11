//Select header image and logo
var topImg = $("#top");
var logo = topImg.find("img");

//When scroll position changes, fades out logo and darkens image
function scrollChange(){
    var scrollPosition = window.scrollY; //Get current scroll position
    if(scrollPosition <= 51){
        var logoSP = scrollPosition*.02; //Multiplies scroll position by .02, for reducing logo's opacity as user scrolls on page
        var darkSP = 100-scrollPosition; //Subtracts 100 by scroll position, for darkening header image as user scrolls on page
        
        //Adjusts logo and head image's CSS properties as user scrolls
        topImg.css("filter", "brightness(" + darkSP + "%)");
        logo.css("opacity", 1-logoSP);
    }
}