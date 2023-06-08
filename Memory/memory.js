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
for (let x = 0; x < imagelist.length; x++){
    let img = document.createElement("img");
    img.src = imagelist[x];
    let src = document.getElementById("images");
    src.appendChild(img);
}
for (var x = 1; x < 10 + 1; x++){
    var knop = document.createElement("button")
    imagelist.innerHTML = x
    imagelist.setAttribute('id',imagelist)
    imagelist.appendChild(imagelist)
}