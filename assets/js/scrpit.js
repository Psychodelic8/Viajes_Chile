//enviar en formulario
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
//correo enviado al clickear el botón
$(document).ready(function(){
    var botoncorreo = $("#enviar-correo");
    botoncorreo.on("click", function(){
        alert("El correo fue enviado correctamente");
    })
});