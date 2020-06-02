window.addEventListener('load', function () {
  formulario_validacion.txtNameDni.addEventListener("keypress", soloNumeros, false);
  formulario_validacion.txtNameDigit.addEventListener("keypress", soloNumeros, false);
});

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

function consultar() {

  var selectValor = document.getElementById('ddlTipoDocumento').value;
  var dniValor = document.getElementById('txtDni').value;
  var digitoValor = document.getElementById('txtDigit').value;
  var fechaValor = document.getElementById('fechaDni').value;

  if (selectValor == 0) {

    Swal.fire({
      showCloseButton: true,
      html: `<p>Seleccione Tipo de Documento</p>`,
      confirmButtonText: "OK"
    });
  } else if (dniValor == '' || dniValor.length < 8) {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Ingrese su número de Documento Válido</p>`,
      confirmButtonText: "OK"
    });
  } else if (digitoValor == '') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Ingrese el dígito de validación</p>`,
      confirmButtonText: "OK"
    });
  } else if (fechaValor == '') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Ingrese fecha de Nacimiento</p>`,
      confirmButtonText: "OK"
    });
  } else {
    url = "registro.html";
    $(location).attr("href", url);
  }





  console.log(selectValor);

  //url = "registro.html";
  //$(location).attr("href", url);
}


function soloNumeros(e) {

  var key = window.event ? e.which : e.keyCode;

  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}