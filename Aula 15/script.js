document.writeln("<h2>Olá, mundo!</h2>");
document.writeln("<h2>Bem-vindo ao JavaScript</h2>");

// window.alert("Essa é uma mensagem de alerta"); //

document.getElementById("title").innerHTML = "Aprendendo JavaScript com o melhor professor da UVV!!!";

// let nome = prompt("Digite seu nome:"); //

document.getElementById("novafrase").innerHTML = "Olá, "+ nome + "! Seja bem-vindo ao JavaScript!";
document.getElementById("novafrase").style.color = "black";
document.getElementById("novafrase").style.fontSize = "50px";
document.getElementById("novafrase").style.textAlign = "center";

function exibirMensagem() {
    
    let nome = document.getElementById("nome").value;
    document.getElementById("novafrase").innerHTML = "Olá, " + nome + "! Seja bem vindo ao JavaScript";
    document.getElementById("novafrase").style.color = "black";
    document.getElementById("novafrase").style.fontSize = "50px";
    document.getElementById("novafrase").style.textAlign = "center";
}
