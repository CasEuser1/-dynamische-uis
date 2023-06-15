let imagelist = ['images/kirito.jpg','images/asuna.jpg','images/konno.jpg','images/suguha.jpg','images/alice.jpg','images/sinon.jpg','images/bercouli.jpg','images/eiji.jpg','images/yuna.jpg','images/yui.jpg']
  
let nummer = 0;
let image = document.getElementById("image");
let vorige = document.getElementById("vorige");
let volgende = document.getElementById("volgende");

function displayImage() {
    image.src = imagelist[nummer];
}

vorige.addEventListener("click", function() {
nummer--;
if (nummer < 0) {
        nummer = imagelist.length - 1;
}
displayImage();
});

volgende.addEventListener("click", function() {
nummer++;
if (nummer >= imagelist.length) {
        nummer = 0;
}
displayImage();
});
displayImage();
  