let aantal = Number(prompt('Hoeveel getallen wil je in de cijferruit?')) + 2;
let cijferruit = '';

for (let i = 0; i < aantal; i++) {
  let list = [];
  for (let j = 1; j < i; j++) {
    list.push(j);
  }
  if (getallen.length > 0) {
    cijferruit += getallen.join('-') + '\n';
  }
}
let Reversed = cijferruit.split('\n');
Reversed.pop(0)
Reversed.pop(0)
let x = Reversed.reverse().join('\n');
cijferruit += x;

const Tekst = document.createElement('p');
Tekst.innerText = cijferruit;
document.body.appendChild(Tekst);