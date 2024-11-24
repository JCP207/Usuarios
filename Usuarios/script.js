class Persona {
    constructor(nombre, apellido, dni, telefono, correo, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.telefono = telefono;
        this.correo = correo;
        this.saldo = saldo;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getDni() {
        return this.dni;
    }
    getTelefono() {
        return this.telefono;
    }
    getCorreo() {
        return this.correo;
    }
    ingresarSaldo(monto) {
        this.saldo += monto;
    }
    retirarSaldo(monto) {
        if (this.saldo < monto) {
            alert("Saldo insuficiente");
        }else{
            this.saldo -= monto;
        }
    }
}

lista = [];
i = 0
function crearPersona() {
    document.getElementById('ocultable').style.display = "block";
}

function mostrarPersona() {
    if (lista.length > 0) {
        document.getElementById("nombreInfo").innerHTML = lista[i].getNombre();
        document.getElementById("apellidoInfo").innerHTML = lista[i].getApellido();
        document.getElementById("dniInfo").innerHTML = lista[i].getDni();
        document.getElementById("telefonoInfo").innerHTML = lista[i].getTelefono();
        document.getElementById("correoInfo").innerHTML = lista[i].getCorreo();
    }else{
        alert("No hay personas");
    }
}
function guardarDatos() {
    document.getElementById('ocultable').style.display = "none";
    nuevaPersona = new Persona(document.getElementById("nombre").value, document.getElementById("apellido").value, document.getElementById("dni").value, document.getElementById("telefono").value, document.getElementById("correo").value)
    lista.push(nuevaPersona);
    mostrarPersona();
}

function siguientePersona() {
    if (lista.length > 0) {
        if (i < lista.length - 1) {
            i++;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
    
}

function anteriorPersona() {
    if (lista.length > 0) {
        if (i > 0) {
            i--;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
}
   