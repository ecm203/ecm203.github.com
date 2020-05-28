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

    $("#txtDni").on("change",function(){
      
    });
  });




