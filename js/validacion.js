const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        validatePasswords();
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");

        
        form.submit();

        alert('Formulario enviado correctamente');
      },
      false
    );
  });
})();

function validatePasswords() {
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  const password1ErrorMessage = document.getElementById(
    "password1-error-message"
  );
  const password2ErrorMessage = document.getElementById(
    "password2-error-message"
  );

//   const validityPass1 = password1.validity;
//   const validityPass2 = password2.validity;

  password1.classList.remove("is-invalid", "is-valid");
  password2.classList.remove("is-invalid", "is-valid");

  // Validación de la contraseña 1
  if (password1.value === "") {
    password1ErrorMessage.textContent = "Este campo no puede estar vacío";
    password1.classList.remove("is-valid");
    password1.classList.add("is-invalid");
  } else {
    password2.classList.remove("is-invalid");
    password1.classList.add("is-valid");
  }

  // Validación de la contraseña 2 (repetir contraseña)
  if (password2.value === "") {
    password2ErrorMessage.textContent =
      "Este campo no puede estar vacío";
    password2.classList.remove("is-valid");
    password2.classList.add("is-invalid");
    password2.setCustomValidity("Las contraseñas no coinciden.");
  } else if (password2.value !== password1.value) {
    password1ErrorMessage.textContent = "Las contraseñas no coinciden.";
    password2ErrorMessage.textContent = "Las contraseñas no coinciden.";
    password2.classList.remove("is-valid");
    password2.classList.add("is-invalid");
  } else {
    password2.classList.remove("is-invalid");
    password2.classList.add("is-valid");
    password2.setCustomValidity("");
  }

//   console.log(validityPass1);
//   console.log(validityPass2);
  password1.reportValidity();
  password2.reportValidity();
}




