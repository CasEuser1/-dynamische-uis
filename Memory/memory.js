let imagelist = ['images/kirito.jpg','asuna','yuuki','suguha','alice','sinon','bercouli','eiji','yuna','yui']
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

let i = document.createElement("IMG");
i.src = "images/kirito.jpg";
document.getElementById("body").appendChild(i);
