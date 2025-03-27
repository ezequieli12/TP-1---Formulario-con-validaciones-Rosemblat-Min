function ErrorAlValidarNombre() 
{
    let Mensaje = document.getElementById("MensajeA");
    var Nombre = document.getElementById("Nombre");
    if (Nombre.value.length >= 3)
    {
        Mensaje.innerHTML = "";
        return true;
    }
    Mensaje.innerHTML = "El nombre debe tener al menos 3 caracteres";
    return false;
}

function ErrorAlValidarContraseña() 
{
    let Mensaje = document.getElementById("MensajeB");
    var Contraseña = document.getElementById("Contraseña").value;
    let tieneLongitud = Contraseña.length >= 8;
    let tieneNumero = /\d/.test(Contraseña);
    let tieneLetra = /[a-zA-Z]/.test(Contraseña);

    if (tieneLongitud && tieneNumero && tieneLetra) 
    {
        Mensaje.innerHTML = "";
        return true;
    }
    else {
        Mensaje.innerHTML = "Tu contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra y un número";
        return false;
    }
}

function ValidarMail()
{
    let Mensaje = document.getElementById("MensajeE");
    var Email = document.getElementById("Email");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(Email.value)) {
        Mensaje.innerHTML = "";
        return true;
    } else {
        Mensaje.innerHTML = "Correo no válido";
        return false;
    }
}

document.getElementById("Email").addEventListener("input", ValidarMail);

function ValidacionDe2Pasos()
{
    var Contraseña = document.getElementById("Contraseña").value;
    var Confirmacion = document.getElementById("ConfirmarContraseña").value;
    let Mensaje = document.getElementById("MensajeC");

    if (Confirmacion === Contraseña && Contraseña.length > 0)
    {
        Mensaje.innerHTML = "";
        return true;
    }
    else
    {
        Mensaje.innerHTML = "Las contraseñas no coinciden";
        return false;
    }
}

function ValidarForm(event) {
    event.preventDefault();

    let nombreValido = ErrorAlValidarNombre();
    let emailValido = ValidarMail();
    let contraseñaValida = ErrorAlValidarContraseña();
    let confirmacionValida = ValidacionDe2Pasos();

    if (nombreValido && emailValido && contraseñaValida && confirmacionValida) {
        alert("Formulario enviado con éxito.");
        document.getElementById("formulario").submit();
    }
    else 
    {
        alert("Formulario no enviado, intente de nuevo.");
    }
}