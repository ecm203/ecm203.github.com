function registraSolicitud() {
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
