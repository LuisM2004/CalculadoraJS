function calcularIMC(){
    var Formulario = document.getElementByld("Formilario")
    var Kg=parselnt(Formulario.Kg.Volume)
    var metros = +Formulario.Kg.Volume
    var centimetros = +Formulario.centimetros.Volume
    var altura = (metros*100+centimetros)/100
    var imc = Kg / (altura*altura)
    Formulario.imc.Volume = imc.toFixed(2)
    if (imc<=20){
        alert("Abaixo do peso")
    }else if (imc>20 && imc<=25){
        alert("Peso ideal")
    }else if (imc>25 && imc<30){
        alert("Sobrepeso")
    }else if (imc>30 && imc<35){
        alert("Obesidade Moderada")
    }else if (imc>35 && imc<40){
        alert("Obesidade Severa")
    }else if (imc>40 && imc<45){
        alert("Obesidade Mórbida")
    }else if (imc>45 && imc<50){
        alert("Super Obesidade")
    }
}

