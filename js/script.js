function mostrarFormulario() {
    const form = document.getElementById('formulario');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    form.scrollIntoView({ behavior: 'smooth' });
}

function enviarFormulario(event) {
    event.preventDefault();

    alert("¡Denuncia enviada con éxito!");

    // Cierra el formulario
    const form = document.getElementById('formulario');
    form.style.display = 'none';

    // Opcional: limpiar los campos del formulario
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.type !== 'submit' && input.type !== 'button') {
            input.value = '';
        }
    });
}