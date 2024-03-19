function encriptar(){
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("img-derecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto-2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("img-derecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto-2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

// function copiar(){
//     var contenido = document.querySelector("#texto-2");
//     contenido.Select();
//     document.execCommand("copy");
//     alert ("se copio");
// }

function copiar(){
    let texto2 = document.getElementById("texto-2");
    let copiar = document.getElementById("copiar");

    navigator.clipboard.writeText(texto2.textContent);
    copiar.textContent="Copiado";  // Con esto solo cambio la palabra del botón es un extra jajaj
    
}