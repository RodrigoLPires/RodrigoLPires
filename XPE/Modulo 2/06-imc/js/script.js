function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', clickBotaoImc);

    var selecionarPeso = document.querySelector('#selecionar-peso')
    var selecionarAltura = document.querySelector('#selecionar-altura')

    selecionarPeso.addEventListener('input', clickBotaoImc)
    selecionarAltura.addEventListener('input', clickBotaoImc)

    clickBotaoImc()
}

function calculateImc (peso, altura) {
    var resultado = peso / (altura**2);
    return resultado
}

function clickBotaoImc() {
    var inputPeso = document.querySelector("#selecionar-peso");
    var inputAltura = document.querySelector("#selecionar-altura");
    var resultImc = document.querySelector("#result-imc")

    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);

    var imc = calculateImc(peso, altura)

    resultImc.textContent = imc.toFixed(2).replace('.',',')

    console.log("Peso informado é de: " + peso)
    console.log("Altura informada é de: " + altura)
    console.log("O IMC calculado é: " + imc)
}

start();
