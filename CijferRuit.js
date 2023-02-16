let Nummer = Number(prompt('Hoeveel nummeres wil je in de ruit?')) + 2;
let output = "";
for (let x = 0; x < Nummer; x++){
    let list = []
    for(let i = 1; i < x; i++ ){
        list.push(i)
        console.log(list)
    } 
    let rij =  list.join("-");
    document.write(rij + "<br>")
}

for (let x = 0; x < Nummer; x++){
    let list = []
    for(let i = 1; i < x; i++ ){
        list.push(i)
    } 
    const parameter = document.createElement("pre")
    parameter.innerText = list.join("-");
    output += parameter.innerText + "\n";
}

const reversedOutput = output.split('\n').reverse().join('\n');
const reversedParameter = document.createElement("pre")
reversedParameter.innerText = reversedOutput;
document.body.appendChild(reversedParameter);