let nombre = prompt ("Ingresa tu nombre:");
    while (Number(nombre) || nombre == '') {
        if (nombre == '') {
            nombre = prompt("Este recuadro no puede quedar vacío, por favor ingresá tu nombre");
        }
        else{
            nombre = prompt("Tu nombre no puede contener números, por favor ingresá tu nombre");
        }
    }

let apellido = prompt ("Ingresa tu apellido:");
    while (Number(apellido) || apellido == '') {
        if (apellido == '') {
            apellido = prompt("Este recuadro no puede quedar vacío, por favor ingresá tu apellido");
        } else{
            apellido = prompt("Tu apellido no puede contener números, por favor ingresá tu apellido");
        } 
    } 

let telefono = prompt ("Ingresa tu teléfono");
    while (!Number(telefono) || telefono == '') {
        if (telefono == '') {
            telefono = prompt("Este recuadro no puede quedar vacío, por favor ingresá tu teléfono");
        } else{
            telefono = prompt("Tu teléfono no puede contener letras, por favor ingresá tu teléfono");
        } 
    } 


    function cantidad1(){
        let cantidad1 = parseInt(prompt("Ingresa monto total a abonar"));
            alert("El total es = " + cantidad1)
                return cantidad1
    }

    function cuotas1(){
        let cuotas1 = parseInt(prompt("¿En cuántas cuotas deseas abonar? De 1 a 12"));
            alert("¿Deseas abonar en" + " " + cuotas1 + " " + "cuotas?")
                return cuotas1
    }

    
    let cantidad = cantidad1()
    let cuotas = cuotas1()
        
    function dividir(cantidad1, cuotas1){
        let resultado = cantidad1 / cuotas1;
               return resultado
    }

    let division = dividir(cantidad, cuotas)
        alert ("Vas a pagar en " + cuotas + " cuotas de " + division + " pesos")