function atualizarvalor() {
    let range = document.querySelector('#range')
    let celcius = document.querySelector('#celcius')
    celcius.value = range.value;

    let fire = document.querySelector('#fire')
    fire.value = (range.value*1.8) + 32

    let k = document.querySelector('#k')
    k.value = parseFloat(range.value) + 273.15
}

