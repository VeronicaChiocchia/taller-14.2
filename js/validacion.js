(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    // Agregar un evento submit al formulario
    form.addEventListener('submit', function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Limpiar mensajes de error anteriores
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        // Verificar si todos los campos están completos
        const inputs = Array.from(form.querySelectorAll('input'));
        let isEmpty = false;

        inputs.forEach(input => {
            // Verificar si el campo está vacío
            if (!input.value.trim()) {
                input.classList.add('is-invalid'); // Agregar clase de Bootstrap para el feedback
                isEmpty = true;

                // Crear y mostrar mensaje de error específico
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error-message text-danger';
                
                // Asignar un mensaje de error específico según el campo
                switch (input.id) {
                    case 'nombre':
                        errorMsg.textContent = 'Debe ingresar un nombre.';
                        break;
                    case 'apellido':
                        errorMsg.textContent = 'Debe ingresar un apellido.';
                        break;
                    case 'email':
                        errorMsg.textContent = 'Debe ingresar un email.';
                        break;
                    case 'password1':
                        errorMsg.textContent = 'Por favor, ingresa una contraseña.';
                        break;
                    case 'password2':
                        errorMsg.textContent = 'Por favor, repite la contraseña.';
                        break;
                }
                
                input.parentElement.appendChild(errorMsg); // Mostrar mensaje de error
            } else {
                input.classList.remove('is-invalid'); // Quitar clase si está lleno
            }
        });

        // Si todos los campos están completos, puedes proceder a enviar el formulario
        if (!isEmpty) {
            alert('Formulario enviado exitosamente.');
            // form.submit(); // Descomentar si deseas enviar el formulario realmente
        }
    });
});