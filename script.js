
const texto = document.querySelector(".ingrese-texto");
const respuesta = document.querySelector(".respuesta");
const formulario = document.querySelector("#formulario");
const muñequito = document.querySelector(".muñequito");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
}

function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value);
    respuesta.value = textoEncriptado;
    texto.value = "";
    muñequito.style.visibility = "hidden";

}

    function encriptar(encriptando){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        encriptando = encriptando.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(encriptando.includes(matrizCodigo[i][0])){

                encriptando = encriptando.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

            }
        }
        return encriptando;
    }

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(texto.value);
    respuesta.value = textoDesencriptado;
    texto.value = "";
    muñequito.style.visibility = "hidden";

}

    function desencriptar(desencriptando){
        let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
        desencriptando = desencriptando.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(desencriptando.includes(matrizCodigo[i][0])){

                desencriptando = desencriptando.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

            }
        }
        return desencriptando;
    }

    function copy(){
        let copiarTexto = document.querySelector("#respuesta");
        copiarTexto.select();
        navigator.clipboard("copiar");
    }

    document.querySelector("#copiar").addEventListener("click", copy);
