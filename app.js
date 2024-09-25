// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Jogo do número secreto'

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'escolha um número entre 1 e 10'
let listaDeNumerosSorteados = []
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1 
function exibirTextoNaTela (tag, texto)  {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rete:1.2})
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'escolha um número entre 1 e 100')
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Parabens você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela ('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'O número secreto é menor')
    } else {
        exibirTextoNaTela ('p', 'O número secreto é maior')
    }
    // tentativas = tentativas + 1
    tentativas++
    limparcampo()
    }


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

if(quantidadeDeElementosNaLista == numeroLimite ) {
    listaDeNumerosSorteados = []
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log (listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparcampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparcampo()
    tentativas= 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
    
