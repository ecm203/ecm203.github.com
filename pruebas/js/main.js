// function animar() {
//   var animacion = $(".caja").hasClass("bounceInRight");
//   if (animacion == true) {
//     $(".caja").removeClass("bounceInRight red ");
//     // $(".caja").addClass("bounce");
//   }
//   else{
//     $(".caja").addClass("bounceInRight red");
//   }

// }


$(document).ready(function(){

  $(".yes").on('click',function(){
      $("#txtPassword").removeAttr( "type");
      $(".no").removeClass("d-none");
      $(".yes").addClass("d-none");
      
     
  });
  $(".no").on('click',function(){
      $("#txtPassword").attr( "type","password");
      $(".yes").removeClass("d-none");
      $(".no").addClass("d-none")
      $(".yes").css('color','#000');
  });
      
  
  $(".register-show").on('click',function(){
    
    $(".panel-show").removeClass("right-panel")
  $(".register").removeClass("d-none")
  $(".login").addClass("d-none")
 
  });
});

function Izquierda() {
  $(".panel-show").removeClass("right-panel")
  $(".register").removeClass("d-none")
  $(".login").addClass("d-none")

}
function Derecha() {
  $(".panel-show").addClass("right-panel")
  $(".register").addClass("d-none")
  $(".login").removeClass("d-none")
}

function validarEmail() {
  var value = document.getElementById("txtEmail").value;
  var input = document.getElementById("input-div");
  var feedback = document.getElementById("input-feedback");
  if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      value
    )
  ) {
    feedback.style.display = "none";
  } else {
    // input.className = "animated shake";
    feedback.textContent = "Formate de email incorrecto ejemplo: nombre@ejemplo.com";
    feedback.style.display = "block";
    feedback.className = "animated bounceInRight";
  }
}
