const form = document.querySelector('#form');
const result = document.querySelector('#result');

let chosenNumber
let secretNumber = parseInt(Math.random() * 11);
let tries = 0;

function reset() {
    secretNumber = parseInt(Math.random() * 11);
    tries = 0
}

function chutar() {

    chosenNumber = form.number.value;
    console.log(`Número secreto: ${secretNumber}`)

    if (chosenNumber == secretNumber) {
        result.innerText = `Parabéns, o número secreto era ${secretNumber}! você acertou!\nRecomeçando o jogo...`
        reset()
    } else if (chosenNumber > 10 || chosenNumber < 0) {
        result.innerText = 'Desculpe, você precisa escolher um número de 0 a 10.'
    } else if (chosenNumber > secretNumber){
        result.innerText = `O número secreto é menor que ${chosenNumber}`
    } else if (chosenNumber < secretNumber){
        result.innerText = `O número secreto é maior que ${chosenNumber}`
    }
    
}

function triesControl() {
    chutar()
    form.reset()
    switch (tries) {
        case 3: result.innerText = 'Acabaram suas tentativas, recomeçando...'
            reset()
            break
        case 2: 
            if (chosenNumber > secretNumber){
                result.innerText = `O número secreto é menor que ${chosenNumber}\n Você só tem mais uma tentativa`
            } else if (chosenNumber < secretNumber) {
                result.innerText = `O número secreto é maior que ${chosenNumber}\n Você só tem mais uma tentativa`
            }
            
            break;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    tries++;

    if (tries <= 3) {
        triesControl()

    } else if (tries > 3 && chosenNumber != secretNumber) {
        result.innerText = 'Suas tentativas acabaram! Resetando o jogo...'
        reset()
    }

})