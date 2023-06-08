let imagelist = ['images/kirito.jpg','images/asuna.jpg','images/yuuki.jpg','images/suguha.jpg','images/alice.jpg','images/sinon.jpg','images/bercouli.jpg','images/eiji.jpg','images/yuna.jpg','images/yui.jpg']
imagelist = shuffle(imagelist)

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array;
}
// for(x = 0; imagelist < x; x++){
//     let img = document.createElement("img");
//     img.src = "images";
//     let src = document.getElementById("images");
//     src.appendChild(img);
// }

function functieArray() {
    var gallery = document.getElementById("pozeGallery");
    for (i = 0; i < imgArray.length; i++) {
        gallery.appendChild(imgArray[i]);
    }
};
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'images/kirito.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'images/asuna.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'img/Gallery/poza2.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'img/Gallery/poza3.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'img/Gallery/poza4.jpg';