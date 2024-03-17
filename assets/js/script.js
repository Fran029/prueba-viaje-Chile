function submitForm() {
    // Obtener los valores del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Crear un objeto con los datos del formulario
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Aquí normalmente realizarías alguna acción con los datos del formulario, pero como no tienes un servidor, simplemente mostraremos una alerta con los datos para demostración
    alert("Datos del formulario:\Envio exitoso \nNombre: " + name + "\nCorreo electrónico: " + email + "\nMensaje: " + message);
}