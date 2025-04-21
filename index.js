const valorReal = document.querySelector("input");
const escolhaDolar = document.getElementById("doll");
const escolhaEuro = document.getElementById("euro");
const escolhaIene = document.getElementById("iene");
const escolhaLibra = document.getElementById("libra");
let moedaDolar = document.getElementById('moedaDolar');
const pDolar = document.getElementById('victor-valor');

function converterParaDolar() {
    const valorConversao = valorReal.value / 5.80
    moedaDolar.style.display = "block";
    pDolar.textContent = valorConversao;
}

function converterParaEuro() {
    const valorConversao = valorReal.value / 6.16
    alert("€" + valorConversao.toFixed(2))
}

function converterParaIene() {
    const valorConversao = valorReal.value / 24
    alert("¥" + valorConversao.toFixed(2))
}

function converterParaLibra() {
    const valorConversao = valorReal.value / 6.62
    alert("£" + valorConversao.toFixed(2))
}