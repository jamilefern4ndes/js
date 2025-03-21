
function calc (event){
    event.preventDefault()

    let n1 = parseFloat(document.querySelector('#n1').value)
    let n2 = parseFloat(document.querySelector('#n2').value)
    let medarea = document.querySelector('#med')
    let media = (n1+n2)/2
    medarea.value = media.toFixed(2)
    
    let res = document.querySelector('#res')
    let classi = 'Aprovado!'
    if (media >= 7){
        res.style.color = 'darkgreen'
    }
    else if(media < 7 && media >=5){
        res.style.color = 'darkorange'
        classi = 'em Recuperação'
    }
    else{
        res.style.color = 'red'
        classi = 'Reprovado'
    }
    res.innerHTML = classi
}