// --------------- Loadding Page ------------------
$(window).on("load", function () {
  $(".panel").fadeOut("slow");
});

$(document).ready(function () {
  $("#btnhelp").on("click", function () {
    Swal.fire({
      title: "Ubica la fecha de emisión de tu dni",
      imageUrl: "img/dni-mesa-trabajo.png",
      imageWidth: 402,
      imageHeight: 334,
      imageAlt: "Custom image",
      confirmButtonColor: "#bf0909",
      confirmButtonText: "Aceptar",
    });
  });
  $(".help-2").on("click", function () {
    Swal.fire({
      title: "Intrucciones",
      icon:"question",
      html:
        "<ul>"+
        "<li>Para realizar la consulta te recomendamos tener tu dni fisico a la mano</li>"+
        "<li>A continuación ingrese el numero de su dni</li>"+
        "<li>Ingrese la fecha de emisión de su dni</li>"+
        "<li>Haga clic en aceptar</li>"+
        "</ul>",
      confirmButtonColor: "#bf0909",
      confirmButtonText: "Aceptar",
    });
  });
  $("#txtDni").on("change", function () {});
});
