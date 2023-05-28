let container = document.getElementById('container')

for (var x = 1; x < 30 + 1; x++){
    var knop = document.createElement("button")
    knop.innerHTML = x
    knop.setAttribute('id',x)
    knop.setAttribute('onClick','ChangeColour()')
    container.appendChild(knop)
}

const list = ['rood','paars','blauw','zwart']