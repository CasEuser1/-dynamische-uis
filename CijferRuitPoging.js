let Nummer = Number(prompt('Hoeveel nummeres wil je in de ruit?')) + 2

for (let x = 0; x < Nummer; x++){
    let list = []
    for(let i = 1; i < x; i++ ){
        list.push(i)
        console.log(list)

    } 
    const parameter = document.createElement("p")
    parameter.innerText = list.join("-");
    document.body.appendChild(parameter);
}
for (x = Nummer; x = 0 > Nummer; Nummer--){
        let list = []
        for(x = Nummer; x - 0 > Nummer; i++ ){
            list.pop(list[list.length - 1])
            list.push(x)
            console.log(list)     

          
        const para = document.createElement("p")
        para.innerText = list.join("-");
        document.body.appendChild(para);
    }
        }
