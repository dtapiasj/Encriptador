
const texto = document.querySelector(".ingrese-texto");
const respuesta = document.querySelector(".respuesta");
const formulario = document.querySelector("#formulario");
const munequito = document.querySelector(".munequito");
const copy = document.querySelector("#copy")
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
}

function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value);
    respuesta.value = textoEncriptado;
    texto.value = "";
    munequito.style.visibility = "hidden";
    copy.style.display = "block"
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
    munequito.style.visibility = "hidden";
    copy.style.display = "block"
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

    function copiar() {
        navigator.clipboard.writeText(respuesta.value);
      }
      document.querySelector("#copy").addEventListener("click", copiar);