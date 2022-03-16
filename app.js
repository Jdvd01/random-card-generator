// funcion para generar el numero de en medio
function numeroRandom(){
    let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let numFinal = Math.floor(Math.random() * numeros.length);
    return numeros[numFinal];
}

//funcion para generar la pinta
function pintaRandom(){
    let pinta = ['♦', '♥️', '♠', '♣'];
    let pintaAleatoria = Math.floor(Math.random() * pinta.length);
    return pinta[pintaAleatoria];
}

//carta completa
let card = document.querySelector("#card");

//cambiar el color si la pinta es diamante o corazon
card.style.color = `${pintaFinal == '♦' || pintaFinal == '♥️' ? "red" : "black"}`;


//pinta de arriba
let pintaTop = document.createElement("div");
card.appendChild(pintaTop);
pintaTop.style.height = "100px";
pintaTop.style.fontSize = "100px";
pintaTop.style.paddingLeft = "20px";
pintaTop.innerHTML = `${pintaFinal}`;

//numero o letra del medio
let divMid = document.createElement("div");
card.appendChild(divMid);
divMid.style.height = "300px";
divMid.style.fontSize = "150px";
divMid.style.display = "flex";
divMid.style.justifyContent = "center";
divMid.style.alignItems = "center";
divMid.innerHTML = `${numeroRandom()}`;

//pinta de abajo
let pintaBot = document.createElement("div");
card.appendChild(pintaBot);
pintaBot.style.height = "100px";
pintaBot.style.fontSize = "100px";
pintaBot.style.paddingLeft = "20px";
pintaBot.style.transform = "rotate(180deg)";
pintaBot.innerHTML = `${pintaFinal}`;