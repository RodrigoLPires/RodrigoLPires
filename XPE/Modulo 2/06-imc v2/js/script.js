var agoraAltura = document.querySelector('#selecionar-altura')
var agoraPeso = document.querySelector('#selecionar-peso')
var agoraIMC = document.querySelector("#result-imc")
var agoraResultadoFaixa = document.querySelector('#faixa-imc')
var agoraPesoIdealMinimo = document.querySelector('#peso-ideal-minimo')
var agoraPesoIdealMaximo = document.querySelector('#peso-ideal-maximo')
var agoraExibirAltura = document.querySelector('#exibir-altura')
var agoraPerderGanhar = document.querySelector('#perder-ganhar')
var agoraMassaMinima = document.querySelector('#massa-minima')
var agoraMassaMaxima = document.querySelector('#massa-maxima')
var imcMinimoFaixa1 = 16
var imcMaximoFaixa2 = 16.9
var imcMaximoFaixa3 = 18.4  //Para considerar Peso Normal
var imcMaximoFaixa4 = 24.9  //Para considerar Peso Normal
var imcMaximoFaixa5 = 29.9
var imcMaximoFaixa6 = 34.9
var imcMaximoFaixa7 = 40
var imcMaximoFaixa8 = 60
var ganharPeso = 'ganhar'
var perderPeso = 'perder'

function start() {
    //var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    //buttonCalculateImc.addEventListener('click', clickBotaoImc);

    //var selecionarPeso = agoraPeso
    //var selecionarAltura = agoraAltura
    //var selecionarPesoIdealMinimo = agoraPesoIdealMinimo
    //var selecionarPesoIdealMaximo = agoraPesoIdealMaximo

    //selecionarPeso.addEventListener('input', imcIndice)
    //selecionarAltura.addEventListener('input', imcIndice)
    //selecionarPesoIdealMinimo.addEventListener('input', pesoMinimo)
    //selecionarPesoIdealMaximo.addEventListener('input', pesoMaximo)

    imcIndice();
    pesoMinimo();
    pesoMaximo();
    exibirAltura();
    perderGanhar();
    massaMininaMaxima();
}

function calculateImc (peso, altura) {
    var resultado = peso / (altura**2);
    return resultado
}

function imcIndice() {
    var inputPeso = agoraPeso;
    inputPeso.addEventListener('input', imcIndice)
    var inputAltura = agoraAltura;
    inputAltura.addEventListener('input', imcIndice)

    var resultImc = agoraIMC;
    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);
    var imc = calculateImc(peso, altura)

    resultImc.textContent = imc.toFixed(2).replace('.',',')
    faixaImc(imc);
    return imc
}

function faixaImc(imc) {
    var resultFaixa = agoraResultadoFaixa;

    if (imc < imcMinimoFaixa1) {
        resultFaixa.textContent = 'Valor inválido'
    } else if (imc >= imcMinimoFaixa1 && imc <= imcMaximoFaixa2) {
        resultFaixa.textContent = 'Muito abaixo do peso'
    } else if (imc > imcMaximoFaixa2 && imc <= imcMaximoFaixa3) {
        resultFaixa.textContent = 'Abaixo do peso'
    } else if (imc > imcMaximoFaixa3 && imc <= imcMaximoFaixa4) {
        resultFaixa.textContent = 'Peso normal'
    } else if (imc > imcMaximoFaixa4 && imc <= imcMaximoFaixa5) {
        resultFaixa.textContent = 'Acima do peso'
    } else if (imc > imcMaximoFaixa5 && imc <= imcMaximoFaixa6) {
        resultFaixa.textContent = 'Obesidade grau I'
    } else if (imc > imcMaximoFaixa6 && imc <= imcMaximoFaixa7) {
        resultFaixa.textContent = 'Obesidade grau II'
    } else if (imc > imcMaximoFaixa7 && imc <= imcMaximoFaixa8) {
        resultFaixa.textContent = 'Obesidade grau III ou mórbida'
    } else if (imc > imcMaximoFaixa8)
        resultFaixa.textContent = 'Obesidade mórbida II'
} 

function pesoMinimo() {
    var inputAltura = agoraAltura
    inputAltura.addEventListener('input', pesoMinimo);

    var imcMinimo = imcMaximoFaixa3
    var altura = inputAltura.value;
    var resultado = imcMinimo * (altura ** 2);
    var resultadoPesoMinimo = agoraPesoIdealMinimo

    resultadoPesoMinimo.textContent = resultado.toFixed(2)

    return resultado
}

function pesoMaximo() {
    var inputAltura = agoraAltura
    inputAltura.addEventListener('input', pesoMaximo);

    var imcMaximo = imcMaximoFaixa4
    var altura = inputAltura.value;
    var resultado = imcMaximo * (altura ** 2)
    var resultadoPesoMaximo = agoraPesoIdealMaximo

    resultadoPesoMaximo.textContent = resultado.toFixed(2)

    return resultado
}

function exibirAltura() {
    var inputAltura = agoraAltura;
    inputAltura.addEventListener('input', exibirAltura);

    var alturaExibir = agoraExibirAltura;

    alturaExibir.textContent = Number(inputAltura.value).toFixed(2)
    
    return alturaExibir
}

function perderGanhar() {
    //Sempre que houver um 'input' nessas variáveis, executar a função informada após o addEventListener
    //Informar em quais momentos deve-se chamar a função
    var inputPeso = agoraPeso;
    inputPeso.addEventListener('input', perderGanhar)
    var inputAltura = agoraAltura;
    inputAltura.addEventListener('input', perderGanhar)

    var imc = imcIndice()
    var imcMinimo = imcMaximoFaixa3
    var imcMaximo = imcMaximoFaixa4

    if (imc < imcMinimo) {
        resultado = ganharPeso;
    } else if (imc > imcMaximo) {
        resultado = perderPeso;
    } else resultado = 'manter perdas e ganhos entre'

    agoraPerderGanhar.textContent = resultado

    return resultado
}

function massaMininaMaxima() {
    //Sempre que houver alteração nessas variáveis executar a função inserida após o addEvent
    var inputPeso = agoraPeso;
    inputPeso.addEventListener('input', massaMininaMaxima);
    var inputAltura = agoraAltura;
    inputAltura.addEventListener('input', massaMininaMaxima);

    var valorPesoMinimo = pesoMinimo();
    var valorPesoMaximo = pesoMaximo();
    var valorPeso = inputPeso.value
    var valorGanharPesoMinimo = (valorPesoMinimo - valorPeso).toFixed(2)
    var valorGanharPesoMaximo = (valorPesoMaximo - valorPeso).toFixed(2)
    var valorPerderPesoMinimo = (valorPeso - valorPesoMaximo).toFixed(2)
    var valorPerderPesoMaximo = (valorPeso - valorPesoMinimo).toFixed(2)

    if (perderGanhar() === ganharPeso) {
        agoraMassaMinima.textContent = valorGanharPesoMinimo;
        agoraMassaMaxima.textContent = valorGanharPesoMaximo;
    } else if (perderGanhar() === perderPeso) {
        agoraMassaMinima.textContent = valorPerderPesoMinimo;
        agoraMassaMaxima.textContent = valorPerderPesoMaximo;
    } else {
        agoraMassaMinima.textContent = valorPerderPesoMaximo;
        agoraMassaMaxima.textContent = valorGanharPesoMaximo;
    } 

}

start();
