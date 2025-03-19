function ErrorAlValidarNombre() 
{
    let Mensaje = document.getElementById("MensajeA")
    var Nombre = document.getElementById("Nombre");
    if (Nombre.value.length>3)
    {
        Mensaje.innerHTML="";
    }
    
}
function ErrorAlValidarContraseña() 
{
    let Mensaje = document.getElementById("MensajeB")
    var Contraseña =document.getElementById("Contraseña");
    if (Contraseña.value.length>8)
    {
        Mensaje.innerHTML="";
    }
    else
    {
        Mensaje.innerHTML="Tu contraseña no tiene los suficientes caracteres";
    }
}
function ValidacionDe2Pasos()
{
    var Contraseña = document.getElementById("Contraseña");
    var Confirmacion = document.getElementById("ConfirmarContraseña");
    let Mensaje = document.getElementById("MensajeC")
    console.log(Mensaje + " " + Contraseña +" "+ Confirmacion)
    
    if (Confirmacion.value === Contraseña.value)
    {
        Mensaje.innerHTML="";
    }
    else if (Confirmacion.value !== Contraseña.value)
    {
        Mensaje.innerHTML="Validar"
    }
}