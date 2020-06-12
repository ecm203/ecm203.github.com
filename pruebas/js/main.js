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

$(document).ready(function () {

  /*----------- Menu mobile------------*/
  new Mmenu(document.querySelector('#menu'));

  /*----------------Menu normal------------*/
  $(".menu-open").on('click',function(){
    $(".menu-close").css("display","flex");
    $(".principal-menu").css("display","block");
    $("#main").addClass("main");
   $(".menu-open").css("display","none");
})

$(".menu-close").on('click',function(){
    $(".menu-open").css("display","flex");
    $(".principal-menu").css("display","none");
    $(".menu-close").css("display","none");
    $("#main").removeClass("main")
 })

 /*---------------Show password--------*/
  $(".yes").on("click", function () {
    $("#txtPassword").attr("type", "password");
    $(".no").removeClass("d-none");
    $(".yes").addClass("d-none");
  });
  $(".no").on("click", function () {
    $("#txtPassword").removeAttr("type");
    $(".yes").removeClass("d-none");
    $(".yes").css("color","#000");
    $(".no").addClass("d-none");
  });

  /*-------------Show login or register----------*/
  $(".register-show").on("click", function () {
    $(".panel-show").removeClass("right-panel");
    $(".register").removeClass("d-none");
    $(".login").addClass("d-none");
  });
  $(".login-show").on("click", function () {
    $(".panel-show").addClass("right-panel");
    $(".register").addClass("d-none");
    $(".login").removeClass("d-none");
  });
});


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
    feedback.textContent = "Email incorrecto ejemplo: nombre@ejemplo.com";
    feedback.style.display = "block";
    feedback.className = "animated bounceInRight";
  }
}

  /*-------------Show modal login----------*/
function openLogin(){
  $(".modal-login").removeClass(" fadeOutUpBig");
  $(".background-modal").css("display","flex");
  $(".modal-login").addClass("animated fadeInDownBig");
}

function closeModal(){
  // $(".modal-login").addClass("animated fadeOutUpBig");
$(".background-modal").css("display","none");
}