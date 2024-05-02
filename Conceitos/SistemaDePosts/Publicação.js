function Publicar() {
    const inputFile = document.getElementById('image')
    const BLOCO = document.getElementById('BLOCO')
    const description = document.getElementById('description').value

    // Verifica se um arquivo foi selecionado
    if (inputFile.files.length > 0) {
        const file = inputFile.files[0]

        // Cria um novo elemento de imagem
        const Newimg = document.createElement('img')
        // Define o atributo src do elemento de imagem como uma URL criada para o arquivo
        Newimg.src = URL.createObjectURL(file)

        const NewDescription = document.createElement('p')
        NewDescription.textContent = description

        // Adiciona a imagem ao elemento BLOCO]


        BLOCO.appendChild(Newimg)
        BLOCO.appendChild(NewDescription)

    } else {
        console.error('Nenhum arquivo selecionado.')
    }
}
