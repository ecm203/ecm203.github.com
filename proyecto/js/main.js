
/*Menu mobile*/
// (function(){
//   new Mmenu(document.querySelector("#menu-mobile"));
//  })();
document.addEventListener(
  "DOMContentLoaded", () => {
      new Mmenu( "#menu-mobile" );
  }
);

// Dropdown Menu

if (screen.width <= 992) {
  var dropdown = document.querySelectorAll(".dropdown");
  var dropdownArray = Array.prototype.slice.call(dropdown, 0);
  dropdownArray.forEach(function (el) {
    var button = el.querySelector('a[data-toggle="dropdown"]'),
      menu = el.querySelector(".dropdown-menu"),
      arrow = button.querySelector("i.icon-next");

    button.onclick = function (event) {
      if (!menu.hasClass("show-drop")) {
        menu.classList.add("show-drop");
        menu.classList.remove("hide-drop");
        arrow.classList.add("arrow-open");
        arrow.classList.remove("arrow-close");
        event.preventDefault();
      } else {
        menu.classList.remove("show-drop");
        menu.classList.add("hide-drop");
        arrow.classList.remove("arrow-open");
        arrow.classList.add("arrow-close");
        event.preventDefault();
      }
    };
  });

  Element.prototype.hasClass = function (className) {
    return (
      this.className &&
      new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className)
    );
  };
}

/*Animaciones con javascript*/
const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener("animationend", handleAnimationEnd);

      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd);
  });

/*Open Background*/
function openBackground() {
  let background = document.querySelector(".background-overlay");

  background.classList.remove(
    "disabled-background",
    "animate__animated",
    "animate__fadeIn"
  );
  background.classList.add(
    "active-background",
    "animate__animated",
    "animate__fadeIn",
    "animate__faster"
  );
}
function closeBackground() {
  let background = document.querySelector(".background-overlay");

  animateCSS(".background-overlay", "fadeOut").then((message) => {
    // Do something after the animation
    background.classList.remove(
      "active-background",
      "animate__animated",
      "animate__fadeIn"
    );
    background.classList.add("disabled-background");
  });
}

/*Open Modal*/

function openModal(element, animation, prefix = "animate__") {
  const modal = document.querySelector(element);

  modal.classList.remove(
    "disabled-modal",
    `${prefix}animated`,
    `${prefix}${animation}`
  );

  modal.classList.add(
    "active-modal",
    `${prefix}animated`,
    `${prefix}${animation}`,
    `${prefix}faster`
  );
}

/* Open login*/
function openLogin() {
  openBackground();
  openModal(".login-modal", "backInDown");
}

/*Cerrar modal*/
function closeModal(element, animation, prefix = "animate__") {
  let modal = document.querySelector(element);

  closeBackground();

  animateCSS(element, animation).then((message) => {
    // Do something after the animation
    modal.classList.remove(
      "active-modal",
      `${prefix}animated`,
      `${prefix}${animation}`
    );
    modal.classList.add("disabled-modal");
  });
}

/*Verificar quien esta active*/
function validaModal() {
  const modal1 = document.querySelector(".login-modal");
  const modal2 = document.querySelector(".cart-modal");
  const modal3 = document.querySelector(".menu-principal");

  let prueba1 = modal1.classList.contains("active-modal");
  let prueba2 = modal2.classList.contains("active-modal");
  let prueba3 = modal3.classList.contains("active-modal");

  if (prueba1 == true) {
    closeModal(".login-modal", "backOutUp");
  }
  if (prueba2 == true) {
    closeModal(".cart-modal", "slideOutRight");
  }
  if (prueba3 == true) {
    closeModal(".menu-principal", "fadeOutUp");
  }
}

/*Validar email*/
function validarEmail() {
  var value = document.getElementById("txtEmail").value;
  var input = document.querySelector(".input-div");
  var feedback = document.querySelector(".input-feedback");
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
    feedback.classList.add("animate__animated", "animate__bounceIn");
  }
}

/*Mostrar contraseña*/
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const txt = document.getElementById("txtPassword");

yes.onclick = function (event) {
  txt.setAttribute("type", "text");
  yes.classList.add("d-none");
  no.classList.remove("d-none");
  no.style.color = "#000";
};

no.onclick = function (event) {
  txt.setAttribute("type", "password");
  no.classList.add("d-none");
  yes.classList.remove("d-none");
};

/*Open Cart*/
function openCart() {
  openBackground();
  openModal(".cart-modal", "slideInRight");
}

/*Animation menu*/


/*Open menu*/
function menuPrincipal() {

  const menu = document.querySelector(".menu-principal");
  const logo = document.querySelector(".menu");

    const bool = menu.classList.contains("active-modal");


  if (bool == false) {
    logo.classList.add("mm-wrapper_opened");
    openModal(".menu-principal", "fadeInDown");
  }
  if (bool == true){
    logo.classList.remove("mm-wrapper_opened");
    validaModal();
  }
}

