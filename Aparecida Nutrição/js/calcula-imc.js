var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
          
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imcPaciente = paciente.querySelector(".info-imc");

    pesoValido = validaPeso(peso);
    alturaValida = validaAltura(altura);

    if (!pesoValido) {
        imcPaciente.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        imcPaciente.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(altura,peso);
        imcPaciente.textContent = imc;
    }
}

function calculaImc(altura,peso) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso >= 0 && peso <= 500 ) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0 ) {
        return true;
    } else {
        return false;
    }
}

