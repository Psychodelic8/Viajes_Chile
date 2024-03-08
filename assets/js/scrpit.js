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
/* Smootp Scrol */
$('.carousel').on('slide.bs.carousel', function (e) {
    var $target = $(e.relatedTarget);
    var index = $target.index();
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 800); // Duración del desplazamiento en milisegundos
  });