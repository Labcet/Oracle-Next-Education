var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){
    var tdPeso = pacientes[i].querySelector('.info-peso');
    var tdAltura = pacientes[i].querySelector('.info-altura');
    var tdImc = pacientes[i].querySelector('.info-imc');
    var nombre = pacientes[i].querySelector('.info-nombre');

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEsValido = validarPeso(peso); // asumiendo de buena fe que el peso es correcto
    var alturaEsValida = validarAltura(altura); // asumiendo de buena fe que la altura es correcta


    if(!pesoEsValido) {
        pesoEsValido= false;
        tdImc.textContent = 'Peso Incorrecto';
        pacientes[i].classList.add("paciente-incorrecto");
    }
    
    if(!alturaEsValida) {
        alturaEsValida= false;
        tdImc.textContent = 'Altura Incorrecta';
        pacientes[i].classList.add("paciente-incorrecto");
    }
    
    if(pesoEsValido && alturaEsValida) {
        tdImc.textContent = calcularImc(peso,altura);
    }
}

function calcularImc(peso,altura){
    return (peso/(altura*altura)).toFixed(2);
}

function validarPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validarAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}
