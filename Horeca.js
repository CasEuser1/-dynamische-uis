var bonnetje = [];
while (true) {
    let product = prompt("Welk product wil je toevoegen? (of typ 'stop' om te stoppen)");
    if (product == "stop") {
        break;
    } else {
        if (product !== "fris" && product !== "bier" && product !== "wijn") {
            WindowAlert("Dit ken ik niet.");
        } else {
            let aantal = prompt("Hoeveel " + product + " wil je hebben?");
            let gevonden = false;
            for (var i = 0; i < bonnetje.length; i++) {
                if (bonnetje[i].product == product) {
                    bonnetje[i].aantal = parseInt(bonnetje[i].aantal) + parseInt(aantal);
                    gevonden = true;
                    break;
                }
            }
            if (!gevonden) {
                bonnetje.push({ product: product, aantal: aantal });
            }
            alert(aantal + " " + product + " is toegevoegd aan het bonnetje.");
        }
    }
}
if (bonnetje.length > 0) {
    var bonnetjeOutput = "Bonnetje:";
    var totaalprijs = 0;
    for (var i = 0; i < bonnetje.length; i++) {
        var product = bonnetje[i].product;
        var aantal = bonnetje[i].aantal;
        bonnetjeOutput += aantal + " " + product;
        totaalprijs += productTotaal;
    }
    alert(bonnetjeOutput)
}