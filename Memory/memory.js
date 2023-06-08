let imagelist = ['images/kirito.jpg','images/asuna.jpg','images/konno.jpg','images/suguha.jpg','images/alice.jpg','images/sinon.jpg','images/bercouli.jpg','images/eiji.jpg','images/yuna.jpg','images/yui.jpg']
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
    img.src ="images/background.jpg" ;
    img.setAttribute("onclick","hello()")
    img.setAttribute("id", String(x))
    let source = document.getElementById("images");
    source.appendChild(img);
    if (imagelist.length = 10) {
        imagelist.reverse()
        let img = document.createElement("img");
        img.src = "images/background.jpg";
        img.setAttribute("onclick","hello()")
        let source = document.getElementById("images");
        source.appendChild(img);

    }
}

function hello() {
    document.getElementById(1).src = imagelist
    container = document.getElementById('images');
    imagelist.style.backgroundImage = "images/background.jpg"
    plaatje = document.getElementById('images')
    plaatje.src = imagelist
}
