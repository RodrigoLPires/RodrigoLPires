var agoraAltura = document.querySelector('#selecionar-altura')
var agoraPeso = document.querySelector('#selecionar-peso')
var agoraIMC = document.querySelector("#result-imc")
var agoraResultadoFaixa = document.querySelector('#faixa-imc')
var agoraPesoIdealMinimo = document.querySelector('#peso-ideal-minimo')
var agoraPesoIdealMaximo = document.querySelector('#peso-ideal-maximo')
var agoraExibirAltura = document.querySelector('#exibir-altura')
var imcMinimoFaixa1 = 16
var imcMaximoFaixa2 = 16.9
var imcMaximoFaixa3 = 18.4
var imcMaximoFaixa4 = 24.9
var imcMaximoFaixa5 = 29.9
var imcMaximoFaixa6 = 34.9
var imcMaximoFaixa7 = 40
var imcMaximoFaixa8 = 60

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
        resultFaixa.textContent = 'Valor inválido.'
    } else if (imc >= imcMinimoFaixa1 && imc <= imcMaximoFaixa2) {
        resultFaixa.textContent = 'Muito abaixo do peso.'
    } else if (imc > imcMaximoFaixa2 && imc <= imcMaximoFaixa3) {
        resultFaixa.textContent = 'Abaixo do peso.'
    } else if (imc > imcMaximoFaixa3 && imc <= imcMaximoFaixa4) {
        resultFaixa.textContent = 'Peso normal.'
    } else if (imc > imcMaximoFaixa4 && imc <= imcMaximoFaixa5) {
        resultFaixa.textContent = 'Acima do peso.'
    } else if (imc > imcMaximoFaixa5 && imc <= imcMaximoFaixa6) {
        resultFaixa.textContent = 'Obesidade grau I.'
    } else if (imc > imcMaximoFaixa6 && imc <= imcMaximoFaixa7) {
        resultFaixa.textContent = 'Obesidade grau II.'
    } else if (imc > imcMaximoFaixa7 && imc <= imcMaximoFaixa8) {
        resultFaixa.textContent = 'Obesidade grau III ou mórbida.'
    } else if (imc > imcMaximoFaixa8)
        resultFaixa.textContent = 'Obesidade mórbida II.'
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
    
}

start();
