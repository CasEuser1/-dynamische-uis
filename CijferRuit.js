let aantal = Number(prompt('Hoeveel getallen wil je in de output?')) + 2;
let output = '';

for (let i = 0; i < aantal; i++) {
  let getallen = [];
  for (let j = 1; j < i; j++) {
    getallen.push(j);
  }
  if (getallen.length > 0) {
    output += getallen.join('-') + '\n';
  }
}

let Reversed = output.split('\n');
Reversed.pop(0)
Reversed.pop(0)
let x = Reversed.reverse().join('\n');
output += x;

const Tekst = document.createElement('p');
Tekst.innerText = output;
document.body.appendChild(Tekst);