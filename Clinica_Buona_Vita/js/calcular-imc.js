var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){
    var tdPeso = pacientes[i].querySelector('.info-peso');
    var tdAltura = pacientes[i].querySelector('.info-altura');
    var tdImc = pacientes[i].querySelector('.info-imc');
    var nombre = pacientes[i].querySelector('.info-nombre');

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEsValido = true; // asumiendo de buena fe que el peso es correcto
    var alturaEsValida = true; // asumiendo de buena fe que la altura es correcta


    if(peso <=0 || peso >= 1000) {
        pesoEsValido= false;
        tdPeso.textContent = 'Peso Incorrecto';
    }
    
    if(altura <= 0 || altura >= 3.00) {
        alturaEsValida= false;
        tdAltura.textContent = 'Altura Incorrecta';
    }
    
    if(pesoEsValido && alturaEsValida) {
        tdImc.textContent = calcularImc(peso,altura);
    } else {
        pacientes[i].classList.add("paciente-incorrecto");
    }
}

function calcularImc(peso,altura){
    return (peso/(altura*altura)).toFixed(2);
}
