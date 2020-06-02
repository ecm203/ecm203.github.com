// --------------- Loadding Page ------------------
$(window).on("load", function () {
  $(".panel").fadeOut("slow");
});
function volverEspecificar(){
   url = "index.html";
   $(location).attr("href", url);
}
function siguienteEspecificar(){
   url = "metodo.html";
  $(location).attr("href", url);
}
function volverMetodo(){
   url = "especificar.html";
   $(location).attr("href", url);
}
function siguienteMetodo(){
   url = "envio.html";
  $(location).attr("href", url);
}
function volverEnvio(){
   url = "metodo.html";
  $(location).attr("href", url);
}
function siguienteEnvio(){
   url = "devolucion.html";
  $(location).attr("href", url);
}
function generarEtiqueta() {
  Swal.fire({
    title: "Etiqueta",
    imageUrl: "img/etiqueta.gif",
    imageWidth: "100%",
    imageAlt: "Custom image",
    confirmButtonColor: "#373737",
    confirmButtonText: "Aceptar",
    html: `
      <button type="button"> Imprimir </button>
      <button type="button"> Descargar </button>
            `,
  });
}
