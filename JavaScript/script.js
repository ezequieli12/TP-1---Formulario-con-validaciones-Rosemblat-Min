function ErrorAlValidarContraseña() 
{
    var Contraseña =document.getElementById("Contraseña");
    if (Contraseña.length<8)
    {
        alert("Tu contraseña no tiene los suficientes caracteres")
    }
}
function ErrorAlValidarNombre() 
{
    var Nombre = document.getElementById("Nombre");
    if (Nombre.length<3)
    {
        console.log("Tu contraseña no tiene los suficientes caracteres")
    }
    
}
function ValidacionDe2Pasos()
{
    var Contraseña = document.getElementById("Contraseña");
    var Confirmacion = document.getElementById("Confirmacion");
    let Mensaje = document.getElementById("MensajeC")
    console.log(MensajeC + " " + Contraseña +" "+ Confirmacion)
    if (Confirmacion!=Contraseña)
    {
        Mensaje.style.color="red";
    }
    else if (Confirmacion==Contraseña)
    {
        Mensaje.style.color="green"
    }
}