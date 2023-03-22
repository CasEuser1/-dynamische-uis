let button1 = 0
let button2 = 0
let button3 = 0

function changeImage(doosje){
    console.log(doosje)
    container = document.getElementById('container');
    console.dir(container)
    container.style.backgroundImage = "url(images/bg"+doosje+".jpg)"
    plaatje = document.getElementById('plaatje')
    plaatje.src = "images/"+doosje+".jpg"
    if (String(doosje) === "1"){
        button1 += 1
        document.getElementById('1').innerHTML = button1
        document.getElementById('1').style.backgroundColor = "red";
        document.getElementById('2').style.backgroundColor = "green";
        document.getElementById('3').style.backgroundColor = "green";
        document.getElementById('1').disabled = true;
        document.getElementById('2').disabled = false;
        document.getElementById('3').disabled = false;
    }

    else if (String(doosje) === "2"){
        button2 += 1
        document.getElementById('2').innerHTML = button2
        document.getElementById('1').innerHTML = button1
        document.getElementById('2').style.backgroundColor = "red";
        document.getElementById('1').style.backgroundColor = "green";
        document.getElementById('3').style.backgroundColor = "green";
        document.getElementById('1').disabled = false;
        document.getElementById('2').disabled = true;
        document.getElementById('3').disabled = false;
    }
    else if (String(doosje) === "3"){
        button3 += 1
        document.getElementById('3').innerHTML = button3
        document.getElementById('1').innerHTML = button1
        document.getElementById('3').style.backgroundColor = "red";
        document.getElementById('2').style.backgroundColor = "green";
        document.getElementById('1').style.backgroundColor = "green";
        document.getElementById('3').disabled = true;
        document.getElementById('2').disabled = false;
        document.getElementById('1').disabled = false;
    }
}