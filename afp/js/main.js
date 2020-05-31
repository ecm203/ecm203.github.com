// --------------- Loadding Page ------------------
$(window).on("load", function () {
  $(".panel").fadeOut("slow");
});

$(document).ready(function () {
  Swal.fire({
    showCloseButton: true,
    html:
      "<p class='title-modal'> Las fechas establecidas tienen en cuenta el último dígito o letra del DNI de cada aportante, y obedece al siguiente criterio</p>" +
      "<table class='table' style='font-size:15px'>" +
      "<thead>" +
      "<tr>" +
      "<th scope='col'>Código verificador</th>" +
      "<th scope='col'>Día de solicitud</th>" +
      "</tr>" +
      "</thead>" +
      "<tbody>" +
      "<tr>" +
      "<td>1</td>" +
      "<td>Días 20 y 21 de mayo</td>" +
      "</tr>" +
      "<tr>" +
      "<td>2</td>" +
      "<td>Días 22 y 25 de mayo</td>" +
      "</tr>" +
      "<tr>" +
      "<td>3</td>" +
      "<td>Días 26 y 27 de mayo</td>" +
      "</tr>" +
      "<tr>" +
      "<td>4</td>" +
      "<td>Días 28 y 29 de mayo</td>" +
      "</tr>" +
      "<tr>" +
      "<td>5</td>" +
      "<td>Días 1 y 2 de mayo</td>" +
      "</tr>" +
      "<tr>" +
      "<td>6</td>" +
      "<td>Días 3 y 4 de mayo</td>" +
      "</tr>" +
      "<tr>" +
      "<td>7</td>" +
      "<td>Días 5 y 8 de mayo</td>" +
      "</tr>" +
      "<tr>" +
      "<td>8</td>" +
      "<td>Días 9 y 10 de mayo</td>" +
      "</tr>" +
      "<tr>" +
      "<td>9</td>" +
      "<td>Días 11 y 12 de mayo</td>" +
      "</tr>" +
      "</tbody>" +
      "</table>",
      showConfirmButton: false
  });
});
