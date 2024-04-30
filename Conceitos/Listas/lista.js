const CidadeInput = document.getElementById('Cidade')
const Saida = document.getElementById('Saida')
const Cidades = []

function adicionarCidade()  {
    const novaCidade = CidadeInput.value

    if(novaCidade) {
        Cidades.push(novaCidade)
        Saida.textContent = Cidades.join(',')
    }
}   

adicionarCidade()