let randomNumber = parseInt(Math.random()*100+1)

//constantes para manipular os elementos html

const submit = document.querySelector('#jogar')
const jogada = document.querySelector('#txtNumero')
const jogadaAnterior = document.querySelector ('.vezes')
const jogadasRestantes = document.querySelector('.numChances')
const recomecar = document.querySelector('.resultados')
const avisos = document.querySelector('.avisos')

//criando um paragrafo usando o javascript 
const p = document.createElement('p')

//criando vetor para receber numeros jogados

let numerosJogados = []

//criando um contador para as jogadas

let minhasJogadas = 1

// variavel que permite o usuario jogar
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        let tentativa = parseInt(jogada.value) //armazenando o conteudo da caixa de texto em uma variavel
        
        validaChances(tentativa) //função que ira validar o conteudo jogado


    })
}
// "e" representa o botão

function validaChances(tentativa){
    if(isNaN(tentativa)){
        alert('Atenção: Para jogar informe um número de 1 a 100')

        jogada.value =  ''//limpando o conteudo da caixa de texto
        jogada.focus() //setando o foco na caixa de texto
        
    }
    else if(tentativa < 1|| tentativa > 100){
        alert('Atenção: Para jogar informe um valor de 1 a 100')

        jogada.value =  ''//limpando o conteudo da caixa de texto
        jogada.focus() //setando o foco na caixa de texto
    }

    else{
        numerosJogados.push(tentativa) //empurrando um elemento para o vetor
        if(minhasJogadas === 6 && tentativa !== randomNumber){
            displayTentativas(tentativa) //função
            msg(`GameOver !! <br> O número correto era + ${randomNumber}`)
            fimJogo() //função 
        }
        else{
            displayTentativas(tentativa)
            checarTentativas(tentativa)

        }
    }
}

function checarTentativas(tentativa){
    if(tentativa === randomNumber){
    msg('Parabéns, Você acertou o Número')
    fimJogo()
}
    else if(tentativa < randomNumber){
        msg('Número baixo, tente novamente')
    }

    else if(tentativa > randomNumber){
        msg('Alto demais, tente novamente')
    }
}
function displayTentativas(tentativa){
    jogada.value = ''
    jogada.focus()
    //inserir uma informação dentro de um elemento HTML
    jogadaAnterior.innerHTML += `${tentativa} `
    minhasJogadas++
    jogadasRestantes.innerHTML = `${7 - minhasJogadas}`

}

    function msg(texto){
        avisos.innerHTML = `<h1>${texto}</h1>`
    }