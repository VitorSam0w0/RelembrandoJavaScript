function ATACK1() {

    const Nome1 = document.getElementById('Nome1').value
    const NomeDoPoder1 = document.getElementById('NomeDoPoder1').value
    const DanoDoPoder1 = document.getElementById('DanoDoPoder1').value
    const DanoDoPoderInt1 = parseInt(DanoDoPoder1)
    
    const Nome2 = document.getElementById('Nome2').value
    const Vida2 = document.getElementById('Vida2').value
    const VidaInt2 = parseInt(Vida2)
    
    const NarradorP1 = document.getElementById('NarradorP1')
    
    const VidaPosAtack2 = document.getElementById('VidaPosAtack2')

    const NovaVida2 = VidaInt2-DanoDoPoderInt1

    localStorage.setItem('NovaVida2' , NovaVida2)
    document.getElementById('Vida2').value = NovaVida2;
    addMessage(`${Nome1} lançou o Poder ${NomeDoPoder1} contra ${Nome2}`);

    NarradorP1.textContent = `${Nome1} Lançou o Poder ${NomeDoPoder1} Contra ${Nome2}`
    VidaPosAtack2.textContent = `Vida de ${Nome2} esta em ${NovaVida2}`

    if (Vida2 <=0) {
        NarradorP1.textContent = `${Nome1} derrotou ${Nome2} com o Poder ${NomeDoPoder1}`
        VidaPosAtack2.textContent = `Vida de ${Nome2} chegou no fim ${NovaVida2}`
        alert(`${Nome2} derrotado! O Jogo se reiniciara em 5 segundos`)

        setTimeout(function() {
            location.reload(); // Atualizar a página
        }, 5000);
        
    }
}

function ATACK2() {

    const Nome1 = document.getElementById('Nome1').value
    const Vida1 = document.getElementById('Vida1').value
    const VidaInt1 = parseInt(Vida1)
    
    const Nome2 = document.getElementById('Nome2').value
    const NomeDoPoder2 = document.getElementById('NomeDoPoder2').value
    const DanoDoPoder2 = document.getElementById('DanoDoPoder2').value
    const DanoDoPoderInt2 = parseInt(DanoDoPoder2)
    
    const NarradorP2 = document.getElementById('NarradorP2')

    const VidaPosAtack1 = document.getElementById('VidaPosAtack1')
    
    const NovaVida1 = VidaInt1-DanoDoPoderInt2

    localStorage.setItem('NovaVida1' , NovaVida1)
    document.getElementById('Vida1').value = NovaVida1;
    addMessage(`${Nome2} lançou o Poder ${NomeDoPoder2} contra ${Nome1}`);

    NarradorP2.textContent = `Jogador ${Nome2} Lançou o Poder ${NomeDoPoder2} Contra o Jogador ${Nome1}`
    VidaPosAtack1.textContent = `Vida de ${Nome1} esta em ${NovaVida1}`

    if (Vida1 <=0) {
        NarradorP2.textContent = `${Nome2} derrotou ${Nome1} com o Poder ${NomeDoPoder2}`
        VidaPosAtack1.textContent = `Vida de ${Nome1} chegou no fim ${NovaVida1}`
        alert(`${Nome1} derrotado! O Jogo se reiniciara em 5 segundos`)

        setTimeout(function() {
            location.reload(); // Atualizar a página
        }, 5000);
        
    }
}

function addMessage(message) {
    // Criar um novo elemento de parágrafo para a mensagem
    const p = document.createElement('p');
    p.textContent = message;
    p.classList.add('message');

    // Adicionar a mensagem ao contêiner de mensagens
    messagesContainer.appendChild(p);

    // Remover a mensagem após 10 segundos
    setTimeout(function() {
        p.remove();
    }, 3000);
}

