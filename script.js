
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

/*

  //Funciona pero no diferencia los botones

            const formulario = document.querySelector("#formulario");

            formulario.addEventListener("submit", validarFormulario);

            function validarFormulario(e){
                e.preventDefault();

                const texto = document.querySelector("#texto").value;

                const respuesta = document.getElementById("respuesta");
                respuesta.textContent = (texto);

                let textoCifrado = texto
                    
                    .replace(/e/gi, "enter")
                    .replace(/i/gi, "imes")
                    .replace(/a/gi, "ai")
                    .replace(/o/gi, "ober")
                    .replace(/u/gi, "ufat");

                if (document.getElementById("texto").value.length != 0){
                document.getElementById("respuesta").value = textoCifrado;

                document.getElementById("muñequito").style.visibility = "hidden";
                }

            }
*/
