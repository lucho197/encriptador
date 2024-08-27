function validarTexto() {
    let texto = document.getElementById("inputText").value;
    let regex = /^[a-z\s]*$/;

    if (!regex.test(texto)) {
        document.getElementById("warning").style.display = "block";
    } else {
        document.getElementById("warning").style.display = "none";
    }
}

function encriptar() {
    let texto = document.getElementById("inputText").value;
    let regex = /^[a-z\s]*$/;

    if (regex.test(texto)) {
        let resultado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        mostrarResultado(resultado);
    } else {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.");
    }
}

function desencriptar() {
    let texto = document.getElementById("inputText").value;
    let regex = /^[a-z\s]*$/;

    if (regex.test(texto)) {
        let resultado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        mostrarResultado(resultado);
    } else {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.");
    }
}

function mostrarResultado(resultado) {
    document.getElementById("outputText").value = resultado;
    document.getElementById("placeholderImage").style.display = "none";
    document.getElementById("outputText").style.display = "block";
    document.getElementById("copyButton").style.display = "block";
}

function copiarAlPortapapeles() {
    let texto = document.getElementById("outputText").value;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
    });
}
