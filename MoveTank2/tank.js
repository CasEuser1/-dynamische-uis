var image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"

var linksrechts = 0
var draaien = 0

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
    } else if (e.keyCode == '37') { // left arrow
        image.style.marginLeft =  `${linksrechts = linksrechts - 10}px`;
        image.style.backgroundPosition = `${draaien = draaien - 84}px 0px`
        image.style.transform = "rotate(270deg)"
    	console.log("left arrow");
    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
        image.style.marginLeft =  `${linksrechts = linksrechts + 10}px`;
        image.style.backgroundPosition = `${draaien = draaien + 84}px 0px`; // check goed de rupsband
        image.style.transform = "rotate(90deg)"
    }
}