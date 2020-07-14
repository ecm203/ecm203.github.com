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

/* Open login*/
function openLogin() {
  let background = document.querySelector(".background-overlay");
  let modal = document.querySelector(".login-modal");

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

  modal.classList.remove(
    "disabled-login",
    "animate__animated",
    "animate__fadeInDownBig"
  );
  modal.classList.add(
    "active-login",
    "animate__animated",
    "animate__fadeInDownBig",
    "animate__faster"
  );
}

/*Cerrar login*/ 
function closeModal() {
  let background = document.querySelector(".background-overlay");
  let modal = document.querySelector(".login-modal");

  animateCSS(".background-overlay", "fadeOut").then((message) => {
    // Do something after the animation
    background.classList.remove(
      "active-background",
      "animate__animated",
      "animate__fadeIn"
    );
    background.classList.add("disabled-background");
  });

  animateCSS(".login-modal", "fadeOutUpBig").then((message) => {
    // Do something after the animation
    modal.classList.remove(
      "active-login",
      "animate__animated",
      "animate__fadeInDownBig"
    );
    modal.classList.add(
      "disabled-login"
    );
  });
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
    feedback.classList.add("animate__animated","animate__bounceIn");
  }
}



  /*Mostrar contraseña*/
  const yes = document.querySelector(".yes");
  const no = document.querySelector(".no");
  const txt = document.getElementById("txtPassword");
  
  yes.onclick = function (event) {
    txt.setAttribute("type","text");
    yes.classList.add("d-none");
    no.classList.remove("d-none");
    no.style.color = "#000";
  };

  no.onclick = function (event) {
    txt.setAttribute("type","password");
    no.classList.add("d-none");
    yes.classList.remove("d-none");
  };
