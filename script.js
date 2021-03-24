function converter() {
    let select = document.querySelector('#selecao').value
    let temperatura = document.querySelector('#temperatura')
    let mensagem = document.querySelector('.mensagem')

    if (select == 'celsius') {
        
        let temperaturaConvertida = (Number(temperatura.value) * 9/5) + 32
        mensagem.innerHTML = `${temperatura.value} °C em Fahrenheit são ${temperaturaConvertida} °F`
        
    } else if (select == 'fahrenheit') {
        
        let temperaturaConvertida = (Number(temperatura.value) - 32) * 5/9
        mensagem.innerHTML = `${temperatura.value} °F em Celsius são ${temperaturaConvertida} °C`
    }

}