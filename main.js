const button = document.querySelector(".copy");
const enviar = document.getElementById("submit");
let output = document.querySelector(".resultado");
let mensaje = document.getElementById("offMensaje");
let input = document.querySelector("input");

//Desactivar tecla "Enter"
function pulsar(e) {
    if (e.which === 13) {
      e.preventDefault();
      console.log('prevented');
      return false;
    }
  }


//Remplazar espacio por coma 
function getOutput (){
    let input = document.querySelector(".input").value;
    let resultado = input.replaceAll(" ", ", ");
    document.getElementById("resultado").value = resultado;
}

//Copiar resultado
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
        getOutput();
    } else if (event.keyCode === 67) {
        copy();
    }
} );




