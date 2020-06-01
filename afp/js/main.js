// --------------- Loadding Page ------------------
$(window).on("load", function () {
  $(".panel").fadeOut("slow");
});

$(document).ready(function () {
  Swal.fire({
    showCloseButton: true,
    html: `<p class='title-modal'>Bienvenido</p>
          <div class="small">
          <p style="color: dodgerblue;"> Cronograma de Solicitudes</p>
        <table class="table border ">
          <thead>
            <tr>
              <th scope="col">Último dÍgito de tu documento de Identidad</th>
              <th scope="col">Registra tu solicitud solo los siguientes días</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>0</th>
              <td>19 o 19 de mayo</td>
            </tr>
            <tr>
              <th>1</th>
              <td>20 o 21 de mayo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>22 o 25 de mayo</td>
            </tr>
            <tr>
              <th>3</th>
              <td>26 o 27 de mayo</td>
            </tr>
            <tr>
              <th>4 4</th>
              <td>28 o 29 de mayo</td>
            </tr>
            <tr>
              <th>5 5</th>
              <td>1 o 2 de junio</td>
            </tr>
            <tr>
              <th>6 6</th>
              <td>3 o 4 de junio</td>
            </tr>
            <tr>
              <th>7 7</th>
              <td>5 o 8 de junio</td>
            </tr>
            <tr>
              <th>8</th>
              <td>9 o 10 de junio</td>
            </tr>
            <tr>
              <th>9</th>
              <td>10 o 11 de junio</td>
            </tr>
            <tr>
              <th>Letra u otro valor no numérico</th>
              <td>18 o 19 de junio</td>
            </tr>
          </tbody>
        </table>
        <p class="small">Reguerda que solo puedes presentar una solicitud de retiro hasta el 25% de tu fondo.</p>
           </div>
       `,
    confirmButtonText: "Continuar"
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        showCloseButton: true,
        html: `<p class='title-modal'>Si no tienes una cuenta bancaria, puedes abrir una cuenta en línea en alguno de estos bancos. Haz clic en la entidad bancaria de tu elección</p>
          <div class="small">
          <ul>
            <lo style="text-align: start;">
            <li><a href="" style="cursor:pointer; ">Banbif</a> </li>
            <li><a href="" style="cursor:pointer; ">Banco del Comercio</a></li>
            <li><a href="" style="cursor:pointer; ">Banco de la Nación</a></li>
            </lo>
          </ul>

          <ul>
            <lo style="text-align: start;">
            <li><a href="" style="cursor:pointer; ">Banco Falabella</a> </li>
            <li><a href="" style="cursor:pointer; ">Banco GNB</a></li>
            <li><a href="" style="cursor:pointer; ">Banco Pichincha</a></li>
            </lo>
          </ul>
        
           </div>
       `,confirmButtonText: "Continuar"
      })
    }
  })

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
