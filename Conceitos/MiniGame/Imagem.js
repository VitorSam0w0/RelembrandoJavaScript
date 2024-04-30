const fileInput = document.getElementById('fileInput')

// Adicionar um ouvinte de eventos para quando o arquivo for selecionado
fileInput.addEventListener('change' , function(event){

    const file = event.target.files[0] // Obter o arquivo selecionado
    const imageUrl = URL.createObjectURL(file) // Criar uma URL para a imagem

// Criar um elemento de imagem e definir sua fonte para a URL da imagem
    const img = document.createElement('img')
    img.src = imageUrl

// Limpar o conteúdo atual do contêiner de imagem e adicionar a nova imagem
    const imageContainer = document.getElementById('imageContainer')
    imageContainer.innerHTML = ''
    imageContainer.appendChild(img)
})


////////////////////////////////////////////////////////////////////////////////


const fileInput2 = document.getElementById('fileInput2')

// Adicionar um ouvinte de eventos para quando o arquivo for selecionado
fileInput2.addEventListener('change' , function(event){

    const file = event.target.files[0] // Obter o arquivo selecionado
    const imageUrl = URL.createObjectURL(file) // Criar uma URL para a imagem

// Criar um elemento de imagem e definir sua fonte para a URL da imagem
    const img = document.createElement('img')
    img.src = imageUrl

// Limpar o conteúdo atual do contêiner de imagem e adicionar a nova imagem
    const imageContainer2 = document.getElementById('imageContainer2')
    imageContainer2.innerHTML = ''
    imageContainer2.appendChild(img)
})

