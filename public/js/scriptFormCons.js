document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario-consulta');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Detiene el envío para que puedas validar

        const nombre = document.getElementById('nombre-consulta').value.trim();
        const apellido = document.getElementById('apellido-consulta').value.trim();
        const email = document.getElementById('email-consulta').value;
        const consulta = document.getElementById('comentario').value.trim();

        if (!validarEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (consulta.length < 10) {
            alert("Tu consulta debe tener al menos 10 caracteres.");
            return;
        }

        
        alert("Consulta enviada exitosamente. Gracias por tu mensaje.");
        form.reset();

    });
});

function validarEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
