let imagelist = ['images/kirito.jpg','images/asuna.jpg','images/konno.jpg','images/suguha.jpg','images/alice.jpg','images/sinon.jpg','images/bercouli.jpg','images/eiji.jpg','images/yuna.jpg','images/yui.jpg']
imagelist = shuffle(imagelist)

var Background = 'background'

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
    
    img.src = 'images/'+Background+'.jpg';
    img.setAttribute("onclick","hello()")
    let source = document.getElementById("images");
    source.appendChild(img);
    if (imagelist.length = 10) {
        imagelist.reverse()
        let img = document.createElement("img");
        img.src = 'images/'+Background+'.jpg';
        img.setAttribute("onclick","hello()")
        let source = document.getElementById("images");
        source.appendChild(img);

    }
}

function hello() {
    alert('hoi')
    
}

