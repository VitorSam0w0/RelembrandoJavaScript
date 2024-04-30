const carro = {}
const DadosCarro1 = document.getElementById('DadosCarro1')
const DadosCarro2 = document.getElementById('DadosCarro2')
const OsDados = document.getElementById('OsDados')

function Dados() {

    carro.marca = DadosCarro1.value
    carro.ano = DadosCarro2.value

    OsDados.textContent =  `Marca ${carro.marca} // ano ${carro.ano}`
}