function enviarCorreo() {
    // Obtener el correo electrónico ingresado por el usuario
    var email = document.getElementById("email").value;
    
    // Crear un objeto XMLHttpRequest para enviar la solicitud al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "enviar_correo.py", true); // Cambiar "enviar_correo.py" por la ruta de tu script Python
    
    // Establecer el encabezado de la solicitud
    xhr.setRequestHeader("Content-Type", "application/json");
    
    // Crear un objeto con los datos del correo electrónico
    var data = JSON.stringify({"email": email});
    
    // Enviar la solicitud al servidor
    xhr.send(data);
    
    // Mostrar un mensaje de éxito al usuario
    alert("¡El correo electrónico ha sido enviado con éxito!");
}