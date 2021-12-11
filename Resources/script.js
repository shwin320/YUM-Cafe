//Select header image and logo
var topImg = $("#top");
var logo = topImg.find("img");

//Add event listener to head image and logo, that checks for scroll
topImg.scroll(scrollChange);
logo.scroll(scrollChange);

//When scroll position changes, fades out logo and darkens image
function scrollChange(){
    var scrollPosition = document.body.scrollTop; //Get current scroll position
    console.log(scrollPosition);
    if(scrollPosition <= 25){
        var logoSP = scrollPosition*.04; //Multiplies scroll position by .01, for reducing logo's opacity as user scrolls on page
        logo.css("opacity", 1-logoSP);
    }
}