const button = document.querySelector(".copy");
const enviar = document.getElementById("submit");
let output = document.querySelector(".resultado");
let mensaje = document.getElementById("offMensaje");
let input = document.querySelector("input");


enviar.addEventListener("click", function(){
    let input = document.querySelector("input").value;
    let resultado = input.replaceAll(" ", ", ");
    document.getElementById("resultado").value = resultado;
})





button.addEventListener("click", function(){
    document.querySelector(".resultado").focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    mensaje.classList.add("activo");
    setTimeout(()=>mensaje.classList.remove("activo"), 4000);

})