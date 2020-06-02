window.addEventListener('load', function () {
  formulario_validacionRetiro.txtNameMonto.addEventListener("keypress", soloNumeros, false);
});

$(document).ready(function () {
  Swal.fire({
    icon: "info",
    title: "Importante leer",
    html: ` 
    <ul class="text-left">
        <li>
            <p>
            Ten en cuenta que el retiro de tu fondo de pensiones es intangible, asegúrate de que tu cuenta no esté afectada a otros cargos o medidas dispuestas por entes distintos a la AFP(compensación, afectaciones en garantía, medida cautelar u otro que podría afectar tu disponibilidad). 
            </p>
        </li>
        <li>
            <P>
            La entrega del monto a retirar se hará en dos armadas, la primara, dentro de los 10 días calendario posteriormente al registro de tu solicitud y la segunda, dentro de los siguientes 30 días calendario posteriores al pago de la primera armada. La AFP te informara la fecha de la segunda armada
            </P>
        </li>
    </ul>`,
    showCloseButton: true,
    confirmButton: true,
  });

});

function retiro25(){
  url = "registro.html";
  $(location).attr("href", url);
}


function soloNumeros(e) {

  var key = window.event ? e.which : e.keyCode;

  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}