const button = document.querySelector(".copy");
const enviar = document.getElementById("submit");
let output = document.querySelector(".resultado");
let mensaje = document.getElementById("offMensaje");
let input = document.querySelector("input");


function noEnter($id){
    $textarea = document.getElementById($id);
    niveles = -1;
     
    if(event.which != null) { // Navegadores compatibles con Mozilla
        if(event.which == 13){
            if(navigator.appName == "Opera") niveles = -2;
            $textarea.value = $textarea.value.slice(0, niveles);
        }
 }
}

function getOutput (){
    let input = document.querySelector(".input").value;
    let resultado = input.replaceAll(" ", ", ");
    document.getElementById("resultado").value = resultado;
}

function copy(){
    document.querySelector(".resultado").focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    mensaje.classList.add("activo");
    setTimeout(()=>mensaje.classList.remove("activo"), 4000);

}

enviar.addEventListener("click", getOutput);

button.addEventListener("click", copy);

document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        noEnter("input");
        getOutput();
    } else if (event.keyCode === 67) {
        copy();
    }
} );


