$(document).ready(function () {
    $("#btnhelp").on("click", function () {
      Swal.fire({
        title: "Ubica el digito verificador de tu dni",
        imageUrl: "img/digit-help.png",
        imageWidth: 402,
        imageHeight: 334,
        imageAlt: "Custom image",
        confirmButtonColor: "#2c92ab",
        confirmButtonText: "Aceptar",
      });
    });
  });
  