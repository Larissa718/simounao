function sim(){
    const modal = document.querySelector('dialog')
    modal.showModal()
}

function sair(){
    const modal = document.querySelector('dialog')
    modal.close()
}

function desviar(t){
    var btn = t;
    btn.style.position = 'relative'
    btn.style.bottom = randomNumber(0, 100)
    btn.style.left = randomNumber(0, 100)
}



function randomNumber(min, max){
    return (Math.random()*(max-min)+min) + "%"
}