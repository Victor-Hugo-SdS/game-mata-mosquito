let altura = 0
let largura = 0
let vidas = 1
let tempo = 15


let criarMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criarMosquitoTempo = 1500
  
}else if(nivel === 'dificl') {
    criarMosquitoTempo = 1000

} else if(nivel === 'hard') {
    criarMosquitoTempo = 750

}

function ajustaTela() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}
ajustaTela()

let cronometro = setInterval( function() {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

function posicaoRandomica() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //console.log(' elemento selecionado foi: v' + vidas)
        if (vidas > 3) {
            window.location.href = 'game-over.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            
            vidas ++
        }
        
    } 

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
 
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    
    switch (classe) {

        case 0: 
            return 'mosquito1'
            
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    
    switch (classe) {

        case 0: 
            return 'ladoA'
            
        case 1:
            return 'ladoB'

    }
}
