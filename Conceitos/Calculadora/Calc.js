const MostrarResultado = document.getElementById('MostrarResultado')
function Mais() {
    const Primeiro = document.getElementById('Primeiro').value
    const PrimeiroNumero = parseFloat(Primeiro)
    const Segundo = document.getElementById('Segundo').value
    const SegundoNumero = parseFloat(Segundo)

    if (Primeiro == "") {
        MostrarResultado.textContent = `Valor zerado invalido`
    } else if (Segundo == ""){
        MostrarResultado.textContent = `Valor zerado invalido`
    } else {
        if (PrimeiroNumero === 0 || SegundoNumero === 0) {
            MostrarResultado.textContent = `Em contas simples quando é Zero o valor não muda`
        } else {
            const res = PrimeiroNumero + SegundoNumero

            MostrarResultado.textContent = `O resultado de ${Primeiro} + ${Segundo} é igual a ${res}`
        }
    }

}

function Menos() {
    const Primeiro = document.getElementById('Primeiro').value
    const PrimeiroNumero = parseFloat(Primeiro)
    const Segundo = document.getElementById('Segundo').value
    const SegundoNumero = parseFloat(Segundo)

    if (Primeiro == "") {
        MostrarResultado.textContent = `Valor zerado invalido`
    } else if (Segundo == ""){
        MostrarResultado.textContent = `Valor zerado invalido`
    } else {
        if (PrimeiroNumero === 0 || SegundoNumero === 0) {
            MostrarResultado.textContent = `Em contas simples quando é Zero o valor não muda`
        } else {
            const res = PrimeiroNumero - SegundoNumero

            MostrarResultado.textContent = `O resultado de ${Primeiro} - ${Segundo} é igual a ${res}`
        }
    }

}

function Vezes() {
    const Primeiro = document.getElementById('Primeiro').value
    const PrimeiroNumero = parseFloat(Primeiro)
    const Segundo = document.getElementById('Segundo').value
    const SegundoNumero = parseFloat(Segundo)

    if (Primeiro == "") {
        MostrarResultado.textContent = `Valor zerado invalido`
    } else if (Segundo == ""){
        MostrarResultado.textContent = `Valor zerado invalido`
    } else {
        if (PrimeiroNumero === 0 || SegundoNumero === 0) {
            MostrarResultado.textContent = `Em contas simples quando é Zero o valor não muda`
        } else {
            const res = PrimeiroNumero * SegundoNumero

            MostrarResultado.textContent = `O resultado de ${Primeiro} X ${Segundo} é igual a ${res}`
        }
    }

}

function Dividido() {
    const Primeiro = document.getElementById('Primeiro').value
    const PrimeiroNumero = parseFloat(Primeiro)
    const Segundo = document.getElementById('Segundo').value
    const SegundoNumero = parseFloat(Segundo)

    if (Primeiro == "") {
        MostrarResultado.textContent = `Valor zerado invalido`
    } else if (Segundo == ""){
        MostrarResultado.textContent = `Valor zerado invalido`
    } else {
        if (PrimeiroNumero === 0 || SegundoNumero === 0) {
            MostrarResultado.textContent = `Em contas simples quando é Zero o valor não muda`
        } else {
            const res = PrimeiroNumero / SegundoNumero

            MostrarResultado.textContent = `O resultado de ${Primeiro} % ${Segundo} é igual a ${res}`
        }
    }

}