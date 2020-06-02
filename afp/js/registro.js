window.addEventListener('load', function () {
  formulario_registro.txtNameTelefono.addEventListener("keypress", soloNumeros, false);
  formulario_registro.txtNameCCI.addEventListener("keypress", soloNumeros, false);
});


function registraSolicitud() {


  var emailValor = document.getElementById('txtEmail').value;
  var telefonoValor = document.getElementById('txtTelefono').value;
  var tipoCuentaValor = document.getElementById('ddlTipoCuenta').value;
  var tipoBancoValor = document.getElementById('ddlTipobanco').value;
  var cciBancoValor = document.getElementById('txtCci').value;

  var departamento = document.getElementById('ddlTipoDepartamento').value;
  var provicia = document.getElementById('ddlTipoProvincia').value;
  var distrito = document.getElementById('ddlTipoDistrito').value;
  var direccion = document.getElementById('txtDireccion').value;

  if (emailValor == '') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Ingrese un correo electrónico válido</p>`,
      confirmButtonText: "OK"
    });
  } else if (telefonoValor == '') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Ingrese un número válido</p>`,
      confirmButtonText: "OK"
    });
  } else if (tipoCuentaValor == '0') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Seleccione cuenta bancaria</p>`,
      confirmButtonText: "OK"
    });
  } else if (tipoBancoValor == '0') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Seleccione el Banco</p>`,
      confirmButtonText: "OK"
    });
  }
  else if (cciBancoValor == '') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Digite su CCI</p>`,
      confirmButtonText: "OK"
    });
  }

  else if (departamento == '0') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Seleccione el Departamento</p>`,
      confirmButtonText: "OK"
    });
  }

  else if (provicia == '0') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Seleccione la Provincia</p>`,
      confirmButtonText: "OK"
    });
  }

  else if (distrito == '0') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Seleccione el distrito</p>`,
      confirmButtonText: "OK"
    });
  }

  else if (direccion == '') {
    Swal.fire({
      showCloseButton: true,
      html: `<p>Ingrese su dirección</p>`,
      confirmButtonText: "OK"
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Solicitud registrada con éxito",
      showConfirmButton: true,
    }).then((result) => {
      if (result.value) {
        url = "index.html";
        $(location).attr("href", url);
      }
    });
  }
}




function soloNumeros(e) {

  var key = window.event ? e.which : e.keyCode;

  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}