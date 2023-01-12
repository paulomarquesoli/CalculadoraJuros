
var botao = document.querySelector('button')
botao.addEventListener('click', calcular)

function calcular() {
    var inicial = document.querySelector('#varIn').value
    var taxa = document.querySelector('#taxJuros').value
    var tempo = document.querySelector('#tempoRen').value
    
    if (inicial == 0 || taxa == 0 || tempo == 0) {
        alert('Verifique as informações')

    } else {

        let numInicial = Number(inicial)
        let numTaxa = Number(taxa)/100
        let numTempo = Number(tempo)

        let calculo = numInicial * (1 + numTaxa) ** numTempo
        let conversao = calculo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        let resultado = document.querySelector('.resultado-valor')
        
        resultado.innerHTML = `${conversao}`

    }
}

