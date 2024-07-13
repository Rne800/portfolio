document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['form'];
    const nombreField = form['nombre'];
    const emailField = form['email'];
    const asuntoField = form['asunto'];
    const mensajeField = form['mensaje'];
    const submitButton = form.querySelector('.formcontato__botao');
    
    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const asuntoError = document.getElementById('asuntoError');
    const mensajeError = document.getElementById('mensajeError');
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField() {
        let isValid = true;

        nombreError.textContent = '';
        if (nombreField.value.trim() === '') {
            nombreError.textContent = 'El campo Nombre no debe estar vacío.';
            isValid = false;
        } else if (nombreField.value.length > 50) {
            nombreError.textContent = 'El campo Nombre no debe exceder los 50 caracteres.';
            isValid = false;
        }

        emailError.textContent = '';
        if (emailField.value.trim() === '') {
            emailError.textContent = 'El campo E-mail no debe estar vacío.';
            isValid = false;
        } else if (!emailPattern.test(emailField.value)) {
            emailError.textContent = 'El formato del E-mail no es válido.';
            isValid = false;
        }

        asuntoError.textContent = '';
        if (asuntoField.value.trim() === '') {
            asuntoError.textContent = 'El campo Asunto no debe estar vacío.';
            isValid = false;
        } else if (asuntoField.value.length > 50) {
            asuntoError.textContent = 'El campo Asunto no debe exceder los 50 caracteres.';
            isValid = false;
        }

        mensajeError.textContent = '';
        if (mensajeField.value.trim() === '') {
            mensajeError.textContent = 'El campo Mensaje no debe estar vacío.';
            isValid = false;
        } else if (mensajeField.value.length > 300) {
            mensajeError.textContent = 'El campo Mensaje no debe exceder los 300 caracteres.';
            isValid = false;
        }

        submitButton.disabled = !isValid;
    }

    form.addEventListener('input', validateField);

    form.addEventListener('submit', function(event) {
        validateField();
        if (submitButton.disabled) {
            event.preventDefault();
        } else {
            event.preventDefault();
            const mailtoLink = `mailto:rne800@gmail.com?cc=${emailField.value}&subject=${encodeURIComponent(asuntoField.value)}&body=Mensaje de ${encodeURIComponent(nombreField.value)}, ${encodeURIComponent(mensajeField.value)}`;
            window.location.href = mailtoLink;
        }
    });
});