const pai = document.getElementById('pai');
let filhosDoPai = pai.childNodes

for (let index = filhosDoPai.length - 1; index >= 0; index -= 1){
    const filhoAtual = filhosDoPai[index]
    if(filhosDoPai.id !== 'elementoOndeVoceEsta'){
        filhoAtual.remove()
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho')
segundoEUltimoFilhoDoFilho.remove()

