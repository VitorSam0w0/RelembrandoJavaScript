function Cadastro() {
    const Nome = document.getElementById('Nome').value

    const SobreNome = document.getElementById('SobreNome').value

    const Estudo = document.getElementById('Estudo').value

    const Ano = document.getElementById('Ano').value

    document.getElementById('ExibirNome').textContent = `Nome: ${Nome}`
    document.getElementById('ExibirSobreNome').textContent = `Sobre Nome: ${SobreNome}`
    document.getElementById('ExibirEstudo').textContent = `Estudo: ${Estudo}`


    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()

    const Idade = anoAtual - Ano


    if (Ano > anoAtual) {
        document.getElementById('ExibirAno').textContent = `Data de Nascimento invalida!`
    } else if(Ano == anoAtual) {
        document.getElementById('ExibirAno').textContent = `Recem Nascido`
    } else{
        document.getElementById('ExibirAno').textContent = `Idade: ${Idade}`
    }

    console.log('ola mundo')

}